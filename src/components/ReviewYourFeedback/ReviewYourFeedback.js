import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewYourFeedback extends Component {
    render(){
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feeling: {this.props.reduxState.feelingReducer} </p>
                <p>Understanding: {this.props.reduxState.understandingReducer} </p>
                <p>Support: {this.props.reduxState.supportReducer}</p>
                <p>Comments: {this.props.reduxState.commentReducer}</p>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(ReviewYourFeedback);