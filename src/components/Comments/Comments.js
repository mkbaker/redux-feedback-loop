import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: '', 
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments,
        })
        this.props.history.push('/submit');
    }
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>

                <span className="inputAndNext">
                    <input type="text" placeholder="Comments?" onChange={this.handleChange}/>
                    <button onClick={this.handleNext}>Next</button>
                </span>

            </div>
        )
    }
}

export default connect()(Comments);