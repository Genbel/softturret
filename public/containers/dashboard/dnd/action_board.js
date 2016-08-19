import React, { Component } from 'react';

import style from '../../../../assets/stylesheets/dashboard/dnd.scss';

import Dragelement from './drag_board';
import Dropelement from './drop_board';

export default class Actionboard extends Component {

    render() {
        return (
            <div className="main-dnd">
                <span>Name of the room</span>
                <div className="col-lg-12 clearfix">
                    <div className="col-lg-9 clearfix">
                        <Dropelement />
                    </div>
                    <div className="col-lg-3 clearfix">
                        <Dragelement />
                    </div>
                </div>
            </div>
        );
    }
}