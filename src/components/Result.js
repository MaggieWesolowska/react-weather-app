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
    const sunriseTime = new Date(sunrise * 1000)
      .toLocaleTimeString()
      .slice(0, -3);
    const sunsetTime = new Date(sunset * 1000)
      .toLocaleTimeString()
      .slice(0, -3);

    content = (
      <>
        <h3>Results for:</h3>
        <h2>{city}</h2>
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
        <h4>
          Your current date & time:
          <br />
          {date}
        </h4>
      </>
    );
  }

  return (
    <div className='result'>
      {error ? (
        <h5>City "{city}" not found ..</h5>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
