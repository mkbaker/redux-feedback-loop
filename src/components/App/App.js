import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//components
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <HowAreYouFeeling />
        <br/>
      </div>
    );  
  }
}

export default App;
