import React, { Component } from 'react';

class Support extends Component {
    handleNext = () => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <span className="inputAndNext">
                    <input type="number" placeholder="Support?" />
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default Support;