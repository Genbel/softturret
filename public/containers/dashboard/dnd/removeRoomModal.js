import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { removeRoom } from 'actions/dashboard/roomsActions';
import { getActualRoomId } from 'reducers/dashboard/roomReducer';
import { REMOVE_ROOM_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Footer from 'components/modal/modalFooter';

class RemoveRoomModal extends Component {

    handleClearAllRoom() {
        const { removeRoom, roomId } = this.props;
        removeRoom(roomId);
    }
    render() {
        const { toggleModal } = this.props;
        return (
            <div className="clear-all-modal">
                <Modal>
                    <Header tittle='Clear all the widget from the room' />
                    <Footer onCancel={ toggleModal } onConfirm={ this.handleClearAllRoom.bind(this) } cancelAction={ REMOVE_ROOM_MODAL_CLOSED } />
                </Modal>
            </div>
        );
    }
}

RemoveRoomModal.PropTypes = {
    toggleModal: React.PropTypes.func.isRequired,
    removeRoom: React.PropTypes.func.isRequired,
    roomId: React.PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, removeRoom }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        roomId: getActualRoomId(state.dashboard.rooms)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveRoomModal);