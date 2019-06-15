import React, { Component } from 'react';
import { connect } from 'react-redux';

//material-ui
import Button from '@material-ui/core/button';
import Input from '@material-ui/core/Input';

class Support extends Component {
    state = {
        support: '', 
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT', 
            payload: this.state.support,
        })
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>

                <span className="inputAndNext">
                    <Input type="number" placeholder="Support?" onChange={this.handleChange} />
                    <br />
                    <Button variant='contained' color='primary'onClick={this.handleNext}>Next</Button>
                </span>

            </div>
        )
    }
}

export default connect()(Support);