import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends Component {
  state = {
    value: '',
  };

  handleInputChange = ev => {
    ev.preventDefault();
    this.setState({
      value: ev.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='App-header'>
        <Form
          value={value}
          change={this.handleInputChange}
        />
        <Result />
      </div>
    );
  }
}

export default App;
