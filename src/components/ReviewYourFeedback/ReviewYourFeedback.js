import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";

//import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

//material ui
import Button from '@material-ui/core/button';

class ReviewYourFeedback extends Component {
    handleClick = () => {
        //alert user
        alert('Feedback submitted!');
        
        //post to server/database
        axios({
          method: 'POST', 
          url: '/submit', 
          data: [
            this.props.reduxState.feelingReducer,
            this.props.reduxState.understandingReducer,
            this.props.reduxState.supportReducer,
            this.props.reduxState.commentReducer,
          ],
        })

        //clear reduxState
        this.props.dispatch({
            type: 'CLEAR_REDUCERS', 
        });

        //navigate to success page
        this.props.history.push('/success');
        
        
    }
 
    render(){
        
        return (
          <div>
            <h2>Review Your Feedback</h2>
            <p>Feeling: {this.props.reduxState.feelingReducer} </p>
            <p>
              Understanding:{" "}
              {this.props.reduxState.understandingReducer}
            </p>
            <p>Support: {this.props.reduxState.supportReducer}</p>
            <p>Comments: {this.props.reduxState.commentReducer}</p>

            {/* this ternary operator will disable the submit button until we are on the url '/submit' */}
            {this.props.location.pathname === "/submit" ? (
              <>
                <Button
                  //disabled={!isEnabled}
                  onClick={this.handleClick}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" disabled={true}>
                  Incomplete
                </Button>
              </>
            )}
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(ReviewYourFeedback));