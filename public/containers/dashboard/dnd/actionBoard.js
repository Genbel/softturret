import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { widgetActionInTheRoom } from 'actions/dashboard/widgetActions';
import { getRoomWidgets, getActualRoomName, getActualRoomId, getRoomEditModeState, getActualRoom } from 'reducers/dashboard/roomReducer';
import { getRoomError } from 'reducers/dashboard/errorReducer';
import { getDisconnectedWidgets } from 'reducers/dashboard/widgetReducer';
import style from '../../../../assets/stylesheets/dashboard/dnd.scss';
import _ from 'lodash';
import RoomName from 'containers/dashboard/dnd/roomName';
import ErrorMessage from 'containers/general/errors/errorMessage';
import DragElement from './../../../components/dashboard/dnd/dragBoard';
import DropElement from './../../../components/dashboard/dnd/dropBoard';

class ActionBoard extends Component {

    widgetActionInTheRoom(widgetInfo) {
        const { roomId } = this.props;
        _.assign(widgetInfo, { roomId });
        this.props.widgetActionInTheRoom(widgetInfo);
    }

    render() {
        const { disconnectedWidgets, attachedWidgets, roomName, editMode, roomErrorMessage, actualRoom, roomId } = this.props;
        return (
            <div className="main-dnd">
                { roomErrorMessage !== null && <ErrorMessage reducerSelector={ getRoomError } /> }
                { actualRoom !== null && <RoomName roomId={ roomId } roomName={ roomName }/> }
                <div className="col-lg-12 dnd-grids">
                    <div className="col-lg-9 clearfix">
                        <div className="drop-board clearfix">
                            { _.map(attachedWidgets, (widget, index) => {
                                return <DropElement type={ widget.type }
                                                    key={ index }
                                                    position={ index }
                                                    widgetId= { widget.attached && widget.id }
                                                    text={ widget.text }
                                                    attached={ widget.attached }
                                                    widgetActionInTheRoom={ this.widgetActionInTheRoom.bind(this) }
                                                    editMode={ editMode }/>
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 clearfix">
                        <div className="drag-board">
                            { _.map(disconnectedWidgets, (widget, index) => {
                                return <DragElement type={widget.type}
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
// It is to access the router contextType. Like this we will have all the functionalities
// of that object. NOW WE DO NOT NEED HERE
ActionBoard.contextTypes = {
    router: React.PropTypes.object
};

ActionBoard.PropTypes = {
    widgetActionInTheRoom: React.PropTypes.func.isRequired,
    attachedWidgets: React.PropTypes.array.isRequired,
    disconnectedWidgets: React.PropTypes.array.isRequired,
    roomName: React.PropTypes.string.isRequired,
    roomId: React.PropTypes.string.isRequired,
    editMode: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ widgetActionInTheRoom }, dispatch);
}
const mapStateToProps = (state) => {
    return {
        attachedWidgets: getRoomWidgets(state.dashboard),
        disconnectedWidgets: getDisconnectedWidgets(state.dashboard.widgets),
        roomName: getActualRoomName(state.dashboard),
        roomId: getActualRoomId(state.dashboard.rooms),
        editMode: getRoomEditModeState(state.dashboard.rooms),
        actualRoom: getActualRoom(state.dashboard.rooms)
    }
};

ActionBoard = DragDropContext(HTML5Backend)(ActionBoard);
export default connect(mapStateToProps, mapDispatchToProps)(ActionBoard);