import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const API_KEY = '378d8782aac3425bf266992253fc2a56';

// 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=378d8782aac3425bf266992253fc2a56&units=metric'

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
  };

  handleInputChange = ev => {
    this.setState({
      value: ev.target.value,
    });
  };

  handleCitySubmit = ev => {
    ev.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(
          'Sorry, something went wrong.. Try again.'
        );
      })
      .then(response => response.json())
      .then(result => {
        const date = new Date()
          .toLocaleString()
          .slice(0, -3);

        this.setState({
          date: date,
          city: this.state.value,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset,
          temp: result.main.temp,
          pressure: result.main.pressure,
          wind: result.wind.speed,
          error: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: true,
          city: this.state.value,
        });
      });
  };

  render() {
    const { value, error } = this.state;
    return (
      <div className='App-header'>
        <Form
          value={value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} error={error} />
      </div>
    );
  }
}

export default App;
