import React from 'react';
import './MindShieldComponent.css';

const MindShieldComponent = () => {
  return (
    <div className="mindshield-container">
      <header className="mindshield-header">
        <div className="logo">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0ifgYNVQVcR8-Nd" alt="Logo" width="41" height="41" />
          <span className="logo-text">MIND SHIELD</span>
        </div>
        <nav className="mindshield-nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Apps</a>
          <a href="#">Testimonials</a>
          <a href="#">About us</a>
        </nav>
      </header>
      <main className="mindshield-main">
        <div className="mindshield-content">
          <h1>Help when u need it, <br />Hope when u want it</h1>
          <p>
            A platform dedicated to your safety and mental well-being. Instantly notify loved ones in emergencies with our SOS feature, reflect through secure journaling, and stay motivated with uplifting affirmations.
          </p>
          <button className="register-button">Register</button>
        </div>
        <div className="mindshield-image">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z0ifgoNVQVcR8-Ne" alt="Illustration" width="693" height="598" />
        </div>
      </main>
    </div>
  );
};

export default MindShieldComponent;

