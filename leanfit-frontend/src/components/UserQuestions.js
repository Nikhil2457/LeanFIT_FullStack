import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import './UserQuestions.css'; // 👈 Import CSS for styling and animation

const questions = [
  { key: 'age', label: 'What is your age?' },
  { key: 'gender', label: 'What is your gender (Male/Female)?', type: 'dropdown', options: ['Male', 'Female', 'Other'] },
  { key: 'weight', label: 'Your current weight (kg)?' },
  { key: 'fitnessGoal', label: 'What is your fitness goal ? (ex: Weight Loss, Muscle Gain, Manage Stress)', type: 'dropdown', options: ['Weight Loss', 'Muscle Gain', 'Maintain'] },
  { key: 'waterIntake', label: 'Daily water intake (liters)?' },
  { key: 'sleepHours', label: 'Average sleep hours per night?' },
  { key: 'junkFoodDays', label: 'How many days/week do you eat junk food?' },
  { key: 'inconsistencyReason', label: 'Why were you inconsistent in the past (ex: No Motivation, lack of Knowledge)?', type: 'dropdown', options: ['No Motivation', 'Lack of Time', 'Other'] },
  { key: 'fitnessLevel', label: 'Your current fitness level (Beginner, Intermediate, Advanced)?', type: 'dropdown', options: ['Beginner', 'Intermediate', 'Advanced'] }
];

const UserQuestions = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({ ...answers, [questions[step].key]: e.target.value });
  };

  const handleNext = async () => {
    if (step === questions.length - 1) {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, answers);

        const prompt = `Generate a 30-day personalized fitness schedule for:
        Age: ${answers.age}, Gender: ${answers.gender}, Weight: ${answers.weight}kg,
        Goal: ${answers.fitnessGoal}, Water: ${answers.waterIntake}L/day,
        Sleep: ${answers.sleepHours}hrs, Junk Food: ${answers.junkFoodDays}/week,
        Inconsistency Reason: ${answers.inconsistencyReason}, Level: ${answers.fitnessLevel}.
        Format: Day-wise plan with workouts, meals, and motivation tips.`;

        try {
          await axios.post('http://localhost:5000/generate-schedule', {
            prompt,
            userId: user.uid
          });

          navigate('/schedule');
        } catch (error) {
          console.error('Schedule generation failed', error);
          alert('Failed to generate schedule');
        }
      }
    } else {
      setStep(step + 1);
    }
  };

  const q = questions[step];

  return (
    <div className="question-container">
      <div key={step} className="question-box fade-in">
        <h2>{q.label}</h2>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type your answer..."
          className="input-field"
        />
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default UserQuestions;
