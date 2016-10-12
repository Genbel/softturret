import React, { Component } from 'react';
import RoomPanel from 'containers/dealerboard/roomPanel/RoomPanel';
import SoftKeys from 'components/dealerboard/skeleton/SoftKeys';
import InteractionPanel from 'components/dealerboard/skeleton/InteractionPanel';

class DealerBoard extends Component {

    render() {
        return (
            <div className="dealer-board">
                <RoomPanel />
                <SoftKeys />
                <InteractionPanel />
            </div>
        );
    }
}
export default DealerBoard;