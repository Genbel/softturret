import React, { Component } from 'react';

class DealerBoard extends Component {

    render() {
        return (
            <div className="container-fluid dealer-board">
                    { this.props.children || "Welcome to the dealerboard" }
            </div>
        );
    }
}
export default DealerBoard;