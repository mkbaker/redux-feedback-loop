import React, { Component } from 'react';

class Comments extends Component {
    handleNext = () => {
        this.props.history.push('/submit');
    }
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

                <span className="inputAndNext">
                    <input type="text" placeholder="Comments?" />
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default Comments;