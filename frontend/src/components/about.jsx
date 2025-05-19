import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import storyImage from '../images/l.jpg';
import ArpitaGupta from '../images/a.jpg';
import IshikaYadav from '../images/i.jpg';





const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="text-center mb-4">✨ About Us ✨</h1>

      <div className="qa-section mt-4">
        <h3>📖 Our Story</h3>
        <div className="qa-card">
          <div className="qa-text">
            <p>🌟 It all started with a simple idea — to bring comfort, quality, and care into everyday lives.</p>
            <p>💬 What began as a small project among friends has grown into a community that shares our love for mindful living. We’re still learning, growing, and improving — but we’ve never lost sight of what matters: people, purpose, and pride in our work.</p>
            <p>💛 Thank you for being part of our journey!</p>
          </div>
          <div className="qa-image">
            <img src={storyImage} alt="Our Story" className="img-fluid" />
          </div>
        </div>
      </div>

      <h1 className="text-center mt-5 mb-4">👩‍💻 All Members 👩‍💻</h1>

      <div className="qa-section mt-4">
        <h3>🌸 Arpita Gupta</h3>
        <div className="qa-card">
          <div className="qa-image">
            <img src={ArpitaGupta} alt="Arpita Gupta" className="img-fluid" />
          </div>
          <div className="qa-text">
            <p>🧠 "Discipline is choosing between what you want now and what you want most."</p>
            <p>🌈 "Every day may not be good, but there's something good in every day."</p>
          </div>
        </div>
      </div>

      <div className="qa-section mt-4">
        <h3>🌼 Ishika Yadav</h3>
        <div className="qa-card">
          <div className="qa-text">
            <p>🔁 "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time."</p>
            <p>🌟 "Stars can’t shine without darkness."</p>
          </div>
          <div className="qa-image">
            
            <img src={IshikaYadav} alt="Ishika Yadav" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
