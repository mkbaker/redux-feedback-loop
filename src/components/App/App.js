import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//components
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <HowAreYouFeeling />
        <Understanding />
        <Support />
        <Comments />
        <ReviewYourFeedback />
        
        <br/>
      </div>
    );  
  }
}

export default App;
