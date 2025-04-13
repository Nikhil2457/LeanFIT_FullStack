import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './SchedulePage.css'; // ✅ import the CSS

const SchedulePage = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'schedules', user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data().schedule;
          console.log('📦 Schedule data:', data);
          setSchedule(data);
        } else {
          console.log('⚠️ No schedule found for this user.');
          setSchedule('Schedule not found');
        }
      }
    };
    fetchSchedule();
  }, []);

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Here is Your 30-Day Workout Plan</h2>
      {typeof schedule === 'string' ? (
        <pre className="schedule-text">{schedule}</pre>
      ) : schedule?.parts?.[0]?.text ? (
        <pre className="schedule-text">{schedule.parts[0].text}</pre>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
};

export default SchedulePage;
