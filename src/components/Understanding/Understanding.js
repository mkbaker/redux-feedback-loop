import React, { Component } from 'react';
import { connect } from 'react-redux';

//material-ui
import Button from '@material-ui/core/button';
import Input from '@material-ui/core/Input';

class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding,
        })
        this.props.history.push('/support');
    }

    render() {
        //setup variables for enabling button
        const { understanding } = this.state;
        const isEnabled = understanding.length > 0;
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                
                <span className="inputAndNext">
                    <Input type="number" placeholder="Understanding?" onChange={this.handleChange}/>
                    <br/>
                    <Button disabled={!isEnabled} variant='contained' color='primary'onClick={this.handleNext}>Next</Button>
                </span>

            </div>
        )
    }
}

export default connect()(Understanding);