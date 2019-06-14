import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding,
        })
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                
                <span className="inputAndNext">
                    <input type="number" placeholder="Understanding?" onChange={this.handleChange}/>
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default connect()(Understanding);