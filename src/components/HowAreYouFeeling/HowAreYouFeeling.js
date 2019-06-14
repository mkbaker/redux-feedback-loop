import React, { Component } from 'react';

class HowAreYouFeeling extends Component {
    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <span className="inputAndNext">
                <input type="number" placeholder="Feeling?"/>
                <button>Next</button>
                </span>

            </div>
        )
    }
}//end HowAreYouFeeling

export default HowAreYouFeeling;