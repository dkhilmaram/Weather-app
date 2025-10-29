import React from 'react';
import '../Styles/Weather.css';

export default function Weather() {
  const weatherData = {
    city: "Bizerte",
    temp: 45,
    description: "Clear sky",
  };

  return (
    <div className="weather">
      <div className="weather-card">
        <h2>{weatherData.city}</h2>
        <p>{weatherData.temp}°C</p>
        <p>{weatherData.description}</p>
      </div>
    </div>
  );
}
