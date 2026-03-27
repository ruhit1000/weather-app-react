import React from 'react';
import cloudyIcon from '../../assets/cloudy.png';

const Dashboard = ({ weatherData }) => {
    if (!weatherData) return <div>Loading...</div>;

    const temp = Math.round(weatherData.main.temp);
    const feelsLike = Math.round(weatherData.main.feels_like);
    const weatherDescription = weatherData.weather[0].description;

    return (
        <div className='my-10'>
            <p className='text-2xl font-medium text-center'>{weatherDescription}</p>
            <div className='flex justify-center mt-1'>
                <img src={cloudyIcon} alt="Cloudy" />
            </div>
            <div className='text-center mt-2 space-y-2'>
                <p className='text-6xl font-medium'>{temp}°C</p>
                <p className='text-lg'>Feels like {feelsLike}°C</p>
                <p className='text-lg'>{weatherData.name} | {new Date().toLocaleDateString('en-IN')}</p>
            </div>
        </div>
    );
};

export default Dashboard;