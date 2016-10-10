import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { removeRoom } from 'actions/dashboard/roomsActions';
import { getActualRoomId } from 'reducers/dashboard/roomReducer';
import { sendingRequest } from 'reducers/dashboard/roomReducer';
import { REMOVE_ROOM_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Body from 'components/modal/body';
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
                <Modal className="modal-component-sm">
                    <Header
                        className="delete"
                        tittle='Are you sure that you want to delete the page?' />
                    <Body>
                        <div className="empty-div" />
                    </Body>
                    <Footer
                        onCancel={ toggleModal }
                        onConfirm={ this.handleClearAllRoom.bind(this) }
                        cancelAction={ REMOVE_ROOM_MODAL_CLOSED }
                        comfirmButtonClass="delete"
                        actionText="Accept"
                        reducerSelector={ sendingRequest }
                        reducerType="rooms"/>
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