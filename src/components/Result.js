import React from 'react';

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    error,
  } = props.weather;

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(
      sunrise * 1000
    ).toLocaleTimeString();
    const sunsetTime = new Date(
      sunset * 1000
    ).toLocaleTimeString();
    content = (
      <div>
        <h2>Results for: {city}</h2>
        <h4>Current date & time: {date}</h4>
        <p>Current temperature: {temp} &#176;C</p>
        <p>Sunrise at: {sunriseTime}</p>
        <p>Sunset at: {sunsetTime}</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Wind: {wind} m/s</p>
      </div>
    );
  }

  return (
    <div className='result'>
      {error ? `City ${city} not found` : content}
    </div>
  );
};

export default Result;
