function buildPrompt(data) {
    return `
  You are a personal health assistant. Based on the following user details, generate a 1-month daily fitness schedule (brief plan):
  
  - Age: ${data.age}
  - Gender: ${data.gender}
  - Weight: ${data.weight} kg
  - Fitness Goal: ${data.fitnessGoal}
  - Water Intake: ${data.waterIntake} L/day
  - Sleep Hours: ${data.sleepHours}
  - Junk Food Days: ${data.junkFoodDays} per week
  - Inconsistency Reason: ${data.inconsistencyReason}
  - Fitness Level: ${data.fitnessLevel}
  
  💡 Format:
  Day 1: [Workout + Meals + Tip]
  Day 2: ...
  Include rest days and motivational tips.
  `;
  }
  
  module.exports = { buildPrompt };
  