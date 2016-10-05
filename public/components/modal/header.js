import React, { Component } from 'react';
import classnames from 'classnames';

class Header extends Component {
    render() {
        const className = classnames('modal-custom-header', this.props.className);
        const { tittle } = this.props;
        return (
          <div className={className}>
              <h4>{ tittle }</h4>
          </div>
        );
    }
}

Header.props = {
    children: React.PropTypes.node,
    tittle: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
};

export default Header;