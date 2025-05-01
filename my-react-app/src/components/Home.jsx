import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoFile from '../assets/video/video.mp4';
import homeImage from '../assets/img/home.jpg';
import '../assets/css/Home.css';

const Home = () => {
  // This ensures that any theme or style changes are applied
  useEffect(() => {
    // Force a repaint to ensure styles are applied
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight; // Trigger reflow
    document.documentElement.style.display = '';
  }, []);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <div className="image-section">
          <img src={homeImage} alt="Welcome" className="home-image" />
        </div>
        <div className="content-section">
          <div className="content">
            <h1 style={{ color: '#86c3c5' }}>Student Achievement Portal</h1>
            <p>Track, manage, and showcase your achievement journey</p>
            <div className="button-container">
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;