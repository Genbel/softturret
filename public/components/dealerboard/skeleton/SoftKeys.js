import React, { Component } from 'react';
import Turret from 'containers/dealerboard/turret/Turret';
import DialPanel from 'components/dealerboard/skeleton/DialPanel';

class SoftKeys extends Component {

    render() {
        return (
            <div className="soft-keys">
                <Turret />
                <DialPanel />
            </div>
        );
    }
}

export default SoftKeys;