import React from 'react';
import './ServicesComponent.css';

const ServicesComponent = () => {
  return (
    <div className="services-container">
      <div className="bg-element">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0imkbC__zKlYkwk" alt="Background Element" width="1218" height="968" />
      </div>
      <div className="services-content">
        <h2>Our services</h2>
        <p>We provide to you the best things for you</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z0imkrC__zKlYkwl" alt="SOS Alert" width="200" height="305" />
            <h3>SOS Alert</h3>
            <p>An emergency feature to instantly notify your registered contacts via email or phone in critical situations.</p>
          </div>
          <div className="service-card">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z0imk7C__zKlYkwm" alt="Journalling" width="200" height="305" />
            <h3>Journalling</h3>
            <p>A secure space to document your daily thoughts and feelings for self-reflection.</p>
          </div>
          <div className="service-card">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z0imlLC__zKlYkwn" alt="Positive Affirmations" width="200" height="305" />
            <h3>Positive Affirmations</h3>
            <p>A collection of motivational quotes to inspire positivity and boost your mental well-being every day.</p>
          </div>
        </div>
        <button className="learn-more-button">Learn more</button>
      </div>
    </div>
  );
};

export default ServicesComponent;
