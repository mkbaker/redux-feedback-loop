import React, { Component } from 'react';

class Support extends Component {
    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <span className="inputAndNext">
                    <input type="number" placeholder="Support?" />
                    <button>Next</button>
                </span>

            </div>
        )
    }
}

export default Support;