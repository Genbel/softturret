import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome'

class ErrorMessage extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.errorMessage !== nextProps.errorMessage;
    }

    render() {
        console.log('errorMessage re-render');
        const { errorMessage } = this.props;
        const style = { float: 'none' };
        const spanStyle = { marginLeft: '15px' };
        if( errorMessage !== null) {
            return (
                <div className="col-md-12 error-message clearfix" style={ style }>
                    <div className="alert alert-danger">
                        <FontAwesome name="exclamation-triangle"/><span style={ spanStyle }>{ errorMessage } </span>
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