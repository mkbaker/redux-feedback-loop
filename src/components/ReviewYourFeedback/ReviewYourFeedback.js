import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/button';

class ReviewYourFeedback extends Component {
    handleClick = () => {
        alert('Feedback submitted!');
        
        //post to server/database
        //clear reduxState
        this.props.dispatch({
            type: 'CLEAR_REDUCERS', 
        });
        //navigate back to home 
        
    }
 
    render(){
        // const isEnabled = false; 
        // if (this.props.location.pathname === '/submit') {
        //     isEnabled = true;
        // }
        return (
          <div>
            <h2>Review Your Feedback</h2>
            <p>Feeling: {this.props.reduxState.feelingReducer} </p>
            <p>
              Understanding:{" "}
              {this.props.reduxState.understandingReducer}{" "}
            </p>
            <p>Support: {this.props.reduxState.supportReducer}</p>
            <p>Comments: {this.props.reduxState.commentReducer}</p>

            <Button
              //disabled={!isEnabled}
              onClick={this.handleClick}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(ReviewYourFeedback);