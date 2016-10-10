import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { toggleEditRoom, showRemoveRoomModal } from 'actions/dashboard/roomsActions';
import { getModalState } from 'reducers/dashboard/modalReducer';
import { getRoomEditModeState, getActualRoomId, getRoomAttachedState } from 'reducers/dashboard/roomReducer';
import { ADD_ROOM_MODAL_OPENED, REMOVE_ROOM_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';
import AddRoomModal from 'containers/dashboard/dnd/addRoomModal';
import RemoveRoomModal from 'containers/dashboard/dnd/removeRoomModal';

class ActionBoard extends Component {

    _hasToDisableButton() {
        const { roomId, hasWidgetAttatched, editMode } = this.props;
        return roomId === undefined ?
            true :
            editMode?
                false :
                !hasWidgetAttatched;
    }

    render(){
        const { toggleModal, addRoomModalIsOpen, removeRoomModalIsOpen, toggleEditRoom, editMode, showRemoveRoomModal, roomId } = this.props;
        const disableBtn = this._hasToDisableButton();
        return (
            <div className="control-board col-lg-6">
                <div className="btn-container">
                    <button className="btn btn-danger" onClick={ () => showRemoveRoomModal(roomId) } disabled={ editMode || roomId === undefined }>Delete Page</button>
                    { removeRoomModalIsOpen && <RemoveRoomModal /> }
                </div>
                <div className="btn-container">
                    <button className="btn btn-danger" onClick={ () => toggleEditRoom() } disabled={ disableBtn } >
                        { editMode? 'Save' : 'Erase Widget' }
                    </button>
                </div>
                <div className="btn-container">
                    <button className="btn btn-info" onClick={ () => toggleModal(ADD_ROOM_MODAL_OPENED) } disabled={ editMode }> Add </button>
                    { addRoomModalIsOpen && <AddRoomModal /> }
                </div>
            </div>
        );
    }
}

ActionBoard.PropTypes = {
    toggleModal: React.PropTypes.func.isRequired,
    addRoomModalIsOpen: React.PropTypes.func.isRequired,
    clearAllModalIsOpen: React.PropTypes.func.isRequired,
    toggleEditRoom: React.PropTypes.func.isRequired,
    showRemoveRoomModal: React.PropTypes.func.isRequired,
    editMode: React.PropTypes.string.isRequired,
    hasWidgetAttatched: React.PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, toggleEditRoom, showRemoveRoomModal }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        addRoomModalIsOpen: getModalState(state.dashboard.modals, 'addModal'),
        removeRoomModalIsOpen: getModalState(state.dashboard.modals, 'removeRoom'),
        editMode: getRoomEditModeState(state.dashboard.rooms),
        roomId: getActualRoomId(state.dashboard.rooms),
        hasWidgetAttatched: getRoomAttachedState(state.dashboard.rooms)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBoard);