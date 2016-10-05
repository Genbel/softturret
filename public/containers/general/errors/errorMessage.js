import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.errorMessage !== nextProps.errorMessage;
    }

    render() {
        console.log('errorMessage re-render');
        const { errorMessage } = this.props;
        const style = { float: 'none' };
        if( errorMessage !== null) {
            return (
                <div className="col-md-12 error-message clearfix" style={ style }>
                    <div className="alert alert-danger">
                        <b>{ errorMessage }</b>
                    </div>
                </div>
            );
        } else {
            return <noscript></noscript>;
        }
    }
}

ErrorMessage.PropTypes = {
    reducerSelector: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: ownProps.reducerSelector(state.dashboard.errors)
    }
};

export default connect(mapStateToProps)(ErrorMessage);