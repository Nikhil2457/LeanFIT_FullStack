import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import LandingPage from './LandingPage';
import Login from './Login';
import UserQuestions from './components/UserQuestions';
import SchedulePage from './components/SchedulePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions" element={<UserQuestions />} />
        <Route path="/schedule" element={<SchedulePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
