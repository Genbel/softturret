import React, { Component } from 'react';
import MultiAlert from 'containers/dealerboard/multiAlert/MultiAlert';
import Handset from 'containers/dealerboard/handset/Handset';

class DialPanel extends Component {

    render() {
        return (
            <div className="dial-panel-component">
                <MultiAlert />
                <Handset />
            </div>
        );
    }
}

export default DialPanel;