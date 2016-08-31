import React, { Component } from 'react';

export default class Dealerboard extends Component {

    render() {
        return (
            <div className="container-fluid dealer-board">
                    { this.props.children || "Welcome to the dealerboard" }
            </div>
        );
    }
}