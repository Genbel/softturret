import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { getModalState } from 'reducers/dashboard/modalReducer';
import { ADD_ROOM_MODAL_OPENED, CLEAR_ALL_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';
import AddRoomModal from 'containers/dashboard/dnd/addRoomModal';
import ClearAllModal from 'containers/dashboard/dnd/clearAllModal';

class ActionBoard extends Component {

    render(){
        const { toggleModal, addRoomModalIsOpen, clearAllModalIsOpen } = this.props;
        return (
            <div className="control-board col-lg-6">
                <div className="col-lg-4">
                    <button className="btn btn-danger">Clear all</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-danger" onClick={ () => toggleModal(CLEAR_ALL_MODAL_OPENED)}>Clear all</button>
                    { clearAllModalIsOpen && <ClearAllModal /> }
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-info" onClick={ () => toggleModal(ADD_ROOM_MODAL_OPENED)}> Add </button>
                    { addRoomModalIsOpen && <AddRoomModal /> }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        addRoomModalIsOpen: getModalState(state.dashboard.modals, 'addModal'),
        clearAllModalIsOpen: getModalState(state.dashboard.modals, 'clearAll')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBoard);