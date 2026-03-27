import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [coords, setCoords] = useState({ lat: 23.8041, lon: 90.4152 });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=acb2f0692b6527f3fd9d7129bebbfff6&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        toast.error("Error fetching weather data:", error.message);
      }
    };

    fetchWeatherData();
  }, [coords]);

  const userLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
      }, (error) => {
        toast.error("Error getting location:", error.message);
      });
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className='bg-[#D2982D] text-base-100 h-screen'>
      <Navbar userLocation={userLocation} weatherData={weatherData} />
      <Dashboard weatherData={weatherData} />

      <ToastContainer />
    </div>
  );
};

export default App;