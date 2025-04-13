import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { getScheduleFromBackend } from "./api";

const ScheduleDisplay = () => {
  const [schedule, setSchedule] = useState("");

  useEffect(() => {
    const loadSchedule = async () => {
      const user = auth.currentUser;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const scheduleText = await getScheduleFromBackend(userData);
        setSchedule(scheduleText);
      }
    };
    loadSchedule();
  }, []);

  return (
    <div className="schedule">
      <h2>Your 1-Month Plan</h2>
      <pre>{schedule}</pre>
    </div>
  );
};

export default ScheduleDisplay;
