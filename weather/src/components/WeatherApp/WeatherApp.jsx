import React from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';
import sun_icon from '../Assets/sun.png';
import snow_icon from '../Assets/snow.png';
import rainCloud_icon from '../Assets/rain-cloud.png';
import partlyCloudy_icon from '../Assets/partly-cloudy.png';
import heavyRain_icon from '../Assets/heavy-rain.png';
import clouds_icon from '../Assets/clouds.png';
const WeatherApp = () => {
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search...' />
                <div className='search-icon'>
                    <img src= {search_icon} alt="" />
                </div>
            </div>
            <div className='weather-image'>
            <img src= {partlyCloudy_icon} alt="" />
            </div>
            <div className='weather-temp'>24°c</div>
            <div className='weather-location'>London</div>
            <div className='data-container'>
                <div className='element'>
                    <img src= {humidity_icon} alt="" className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>

                <div className='element'>
                    <img src= {wind_icon} alt="" className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>18 km/h</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp