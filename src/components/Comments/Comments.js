import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

                <span className="inputAndNext">
                    <input type="text" placeholder="Comments?" />
                    <button>Next</button>
                </span>

            </div>
        )
    }
}

export default Comments;