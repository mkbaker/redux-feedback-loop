import React, { Component } from "react";
import { connect } from "react-redux";

class Success extends Component {
    render() {
        return (
            <h2>Feedback Submitted!</h2>
        )
    }
}

export default connect()(Success); 
