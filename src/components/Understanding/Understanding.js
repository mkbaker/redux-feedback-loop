import React, { Component } from 'react';

class Understanding extends Component {
    handleNext = () => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                
                <span className="inputAndNext">
                    <input type="number" placeholder="Understanding?" />
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default Understanding;