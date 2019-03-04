import React, { Component } from 'react';
import axios from 'axios';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './config.js'






//This is the wrapper for the entire app

const API_KEY = config.MY_KEY;


class App extends Component {
  render() {
    return (
      <div>
        <Titles />

      </div>
    );
  }
}

export default App;
