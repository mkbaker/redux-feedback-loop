import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: '', 
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT', 
            payload: this.state.support,
        })
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <span className="inputAndNext">
                    <input type="number" placeholder="Support?" onChange={this.handleChange} />
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default connect()(Support);