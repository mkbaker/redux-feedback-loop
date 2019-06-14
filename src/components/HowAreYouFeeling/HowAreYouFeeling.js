import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowAreYouFeeling extends Component {
    state = {
        feeling: '',
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling, 
        })
        this.props.history.push('/understanding');
    }
    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <span className="inputAndNext">
                <input type="number" placeholder="Feeling?" onChange={this.handleChange}/>
                <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}//end HowAreYouFeeling

export default connect()(HowAreYouFeeling);