import React, { Component } from 'react';

class Understanding extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                
                <span className="inputAndNext">
                    <input type="number" placeholder="Understanding?" />
                    <button>Next</button>
                </span>

            </div>
        )
    }
}

export default Understanding;