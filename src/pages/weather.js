import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/weather.css";

const Weather = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://weather-app-1-qq0g.onrender.com/api/weather/${city}`);
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather App</h2>
      <button className="weather-logout-button" onClick={() => navigate('/')}>Logout</button>
      <div className="weather-input-container">
        <input
          type="text"
          className="weather-input"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather-button" onClick={fetchWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-info">
          <h3 className="weather-city">{weather.city}</h3>
          <p className="weather-temp">Temperature: {weather.temperature}°C</p>
          <p className="weather-humidity">Humidity: {weather.humidity}%</p>
          <p className="weather-pressure">Pressure: {weather.pressure} hPa</p>
          <p className="weather-wind">Wind Speed: {weather.windSpeed} km/h</p>
          <img className="weather-icon" src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.condition} />
        </div>
      )}
    </div>
  );
};

export default Weather;