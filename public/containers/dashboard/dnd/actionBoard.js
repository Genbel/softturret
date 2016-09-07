import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { widgetAttachedToTheRoom } from 'actions/dashboard/widgetActions';
import { getRoomWidgets, getActualRoomName } from 'reducers/dashboard/roomReducer';
import { getDisconnectedWidgets } from 'reducers/dashboard/widgetReducer';
import style from '../../../../assets/stylesheets/dashboard/dnd.scss';
import _ from 'lodash';

import Dragelement from './../../../components/dashboard/dnd/dragBoard';
import Dropelement from './../../../components/dashboard/dnd/dropBoard';

class Actionboard extends Component {

    render() {
        const { disconnectedWidgets, attachedWidgets, widgetAttachedToTheRoom, roomName } = this.props;
        return (
            <div className="main-dnd">
                <span>{roomName}</span>
                <div className="col-lg-12 clearfix">
                    <div className="col-lg-9 clearfix">
                        <div className="drop-board clearfix">
                            { _.map(attachedWidgets, (widget, index) => {
                                return <Dropelement type={widget.type}
                                                    key={index}
                                                    text={widget.text}
                                                    attached={widget.attached}
                                                    widgetAttachedToTheRoom={widgetAttachedToTheRoom}/>
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 clearfix">
                        <div className="drag-board">
                            { _.map(disconnectedWidgets, (widget, index) => {
                                return <Dragelement type={widget.type}
                                             key={index}
                                             text={widget.text}
                                             id ={widget.id}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Actionboard.contextTypes = {
    router: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ widgetAttachedToTheRoom }, dispatch);
}
const mapStateToProps = (state) => {
    return {
        attachedWidgets: getRoomWidgets(state.dashboard),
        disconnectedWidgets: getDisconnectedWidgets(state.dashboard.widgets),
        roomName: getActualRoomName(state.dashboard)
    }
};

Actionboard = DragDropContext(HTML5Backend)(Actionboard);
export default connect(mapStateToProps, mapDispatchToProps)(Actionboard);