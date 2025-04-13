import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import custom CSS for styling

const LandingPage = () => {
  const navigate = useNavigate();

  // Navigate to SignIn or SignUp page
  const handleLoginClick = () => {
    navigate('/signin'); // Assuming you have a SignIn page
  };

  // Navigate to Get Started page
  const handleGetStartedClick = () => {
    navigate('/signup'); // Assuming you have a SignUp page
  };

  return (
    <div className="landing-page">
      {/* Navbar Section */}
      <header className="navbar">
        <div className="logo">FitAI</div>
        <nav>
          <ul>
            <li><button className="navbar-button" onClick={handleLoginClick}>Login</button></li>
            <li><button className="navbar-button primary" onClick={handleGetStartedClick}>Get Started</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your AI-Powered Personal Fitness Assistant</h1>
          <p>Unlock personalized fitness and diet plans powered by AI. Your fitness journey starts here!</p>
          <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="https://cdn11.bigcommerce.com/s-1ozv4x/images/stencil/960x545/uploaded_images/screenshot-2024-10-20-234711.png?t=1729482427" alt="fitness plan" />
          <h3>Personalized Fitness Plans</h3>
          <p>Custom fitness plans tailored to your goals and fitness level, optimized by AI.</p>
        </div>
        <div className="feature">
          <img src="https://connect.healthkart.com/wp-content/uploads/2016/04/Banner-2021-04-09T155601.025.jpg" alt="diet plan" />
          <h3>Custom Diet Plans</h3>
          <p>Get a diet plan that suits your lifestyle, preferences, and fitness goals.</p>
        </div>
      </section>

      {/* Key Benefits Section with Marquee */}
      <section className="key-benefits">
        <h2>Key Benefits of FitAI</h2>
        <marquee>
          AI-powered, personalized plans, progress tracking, real-time feedback, smart reminders, fitness motivation, nutrition tips, goal setting, and more!
        </marquee>
      </section>

      {/* Free Trial Section */}
      <section className="free-trial">
        <h2>Get a 2-Month Free Trial!</h2>
        <p>Sign up now and enjoy a **2-month free trial** to experience personalized fitness like never before. No credit card required!</p>
        <button className="cta-button" onClick={handleGetStartedClick}>Start Free Trial</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 FitAI. All Rights Reserved.</p>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
