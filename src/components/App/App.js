import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
          <Router>
            <Link to = '/'>Home</Link>
          </Router>
        </header>
        <Router>
          <Route path ="/" exact ={true} component={HowAreYouFeeling}/>
          <Route path = "/understanding" component={Understanding} />
          <Route path = "/support" component={Support} />
          <Route path = "/comments" component={Comments} />
          <ReviewYourFeedback /> 
        </Router>
        
        <br />

        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(App);
