import React, { Component } from 'react';
import classnames from 'classnames';

class Body extends Component {
    render() {
        const className = classnames('modal-body', this.props.className);
        return <div { ...this.props} className={className} /> ;
    }
}

Body.propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
};

export default Body;