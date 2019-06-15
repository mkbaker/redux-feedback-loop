import React, { Component } from 'react';
import { connect } from 'react-redux';

//material-ui
import Button from '@material-ui/core/button';
import Input from '@material-ui/core/Input';

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
                    <Input type="text" placeholder="Comments?" onChange={this.handleChange}/>
                    <br />
                    <Button variant='contained' color='primary' onClick={this.handleNext}>Next</Button>
                </span>

            </div>
        )
    }
}

export default connect()(Comments);