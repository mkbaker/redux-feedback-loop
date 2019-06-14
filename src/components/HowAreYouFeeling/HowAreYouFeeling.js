import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowAreYouFeeling extends Component {

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: 5, //CHANGE THIS TO REFLECT UPDATED LOCAL STATE
        })
        this.props.history.push('/understanding');
    }
    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <span className="inputAndNext">
                <input type="number" placeholder="Feeling?"/>
                <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}//end HowAreYouFeeling

export default connect()(HowAreYouFeeling);