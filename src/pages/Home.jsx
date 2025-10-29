import React from 'react';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🌤️ Welcome to the Weather App</h1>
      <p className="home-text">
        Get real-time weather updates for any city around the world.
      </p>
    </div>
  );
}
