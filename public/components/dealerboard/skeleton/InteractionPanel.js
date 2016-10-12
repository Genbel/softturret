import React, { Component } from 'react';
import NotificationArea from 'containers/dealerboard/notificationArea/NotificationArea';
import Speaker from 'containers/dealerboard/speaker/Speaker';

class InteractionPanel extends Component {

    render() {
        return (
            <div className="interaction-panel">
                <NotificationArea />
                <Speaker />
            </div>
        );
    }
}

export default InteractionPanel;