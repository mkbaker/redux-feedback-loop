import React, { Component } from 'react';
import { connect } from 'react-redux';

//material-ui
import Button from '@material-ui/core/button';
import Input from '@material-ui/core/Input';

class HowAreYouFeeling extends Component {
    state = {
        feeling: '',
    }
    

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleNext = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling, 
        })
        this.props.history.push('/understanding');
    }
    render(){
        //setup variables for enabling button
        const {feeling} = this.state; 
        const isEnabled = feeling.length > 0;
        
        return (
            <div>
                <h2>How are you feeling today?</h2>

                <span className="inputAndNext">
                <Input type="number" placeholder="Feeling?" onChange={this.handleChange}></Input>
                <br/>
                <Button disabled={!isEnabled} variant='contained' color='primary' onClick={this.handleNext}>Next</Button>
                </span>

            </div>
        )
    }
}//end HowAreYouFeeling

export default connect()(HowAreYouFeeling);