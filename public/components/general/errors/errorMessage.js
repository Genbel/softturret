import React, { Component } from 'react';

class ErrorMessage extends Component {
    render() {
        return (
            <div className="col-md-12 error-message clearfix" >
                <div className="alert alert-danger">
                    <b>{ this.props.error }</b>
                </div>
            </div>
        );
    }
}

export default ErrorMessage;