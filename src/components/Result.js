import React from 'react';

const Result = props => {
  const {
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
    content = (
      <div>
        <h1>Weather for: {city}</h1>
        <div>Temperature: {temp}</div>
        <div>Sunrise at: {sunrise}</div>
        <div>Sunset at: {sunset}</div>
        <div>Pressure: {pressure}</div>
        <div>Wind: {wind}</div>
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
