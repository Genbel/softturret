import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { tittle } = this.props;
        return (
          <div className="modal-header">
              <h4>{ tittle }</h4>
          </div>
        );
    }
}

export default Header;