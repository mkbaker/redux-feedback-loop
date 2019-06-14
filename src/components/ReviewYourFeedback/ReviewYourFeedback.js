import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewYourFeedback extends Component {
    render(){
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feeling: {this.props.reduxState.feelingReducer} </p>
                <p>Understanding: {this.props.reduxState.understandingReducer} </p>
                <p>Support: </p>
                <p>Comments: </p>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(ReviewYourFeedback);