import React, { Component } from 'react';
import axios from 'axios';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';






//This is the wrapper for the entire app

const API_KEY = 'fce18dae82fb87e5c59cbab96ffc7db3'


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
