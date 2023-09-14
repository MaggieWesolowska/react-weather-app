import React from 'react';
import './Result.css';

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
      <>
        <h2>Results for:</h2>
        <h1>{city}</h1>
        <h4>
          Current date & time:
          <br />
          {date}
        </h4>
        <p>
          Current temperature:{' '}
          <strong>{temp} &#176;C</strong>
        </p>
        <p>
          Sunrise at: <strong>{sunriseTime}</strong>
        </p>
        <p>
          Sunset at: <strong>{sunsetTime}</strong>
        </p>
        <p>
          Pressure: <strong>{pressure} hPa</strong>
        </p>
        <p>
          Wind: <strong>{wind} m/s</strong>
        </p>
      </>
    );
  }

  return (
    <div className='result'>
      {error ? `City ${city} not found` : content}
    </div>
  );
};

export default Result;
