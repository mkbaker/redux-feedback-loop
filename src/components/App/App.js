import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';



//components
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';
import Header from '../Header/Header';

//material ui
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* MuiThemeProvider allows us to use material-ui */}
        <MuiThemeProvider theme={theme}>
          
          <Header />

          <Router>
            <Link to = '/'>Home</Link>
          </Router>
        
        <Router>
          {/* these routes define url for components */}
          <Route path ="/" exact ={true} component={HowAreYouFeeling}/>
          <Route path = "/understanding" component={Understanding} />
          <Route path = "/support" component={Support} />
          <Route path = "/comments" component={Comments} />
          <Route path ="/success" component={Success} />

          {/* review component always on dom */}
          <ReviewYourFeedback />
          
        </Router>

        <br />

        {/* enable this to view reduxState information */}
        {/* <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(App);
