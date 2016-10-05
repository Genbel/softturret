import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { clearAllRoom } from 'actions/dashboard/roomsActions';
import { getActualRoomId } from 'reducers/dashboard/roomReducer';
import { CLEAR_ALL_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Footer from 'components/modal/Footer';

class ClearAllModal extends Component {

    handleClearAllRoom() {
        const { clearAllRoom, roomId } = this.props;
        clearAllRoom(roomId);
    }
    render() {
        const { toggleModal } = this.props;
        return (
            <div className="clear-all-modal">
                <Modal>
                    <Header tittle='Clear all the widget from the room' />
                    <Footer onCancel={ toggleModal } onConfirm={ this.handleClearAllRoom.bind(this) } cancelAction={ CLEAR_ALL_MODAL_CLOSED } />
                </Modal>
            </div>
        );
    }
}

ClearAllModal.PropTypes = {
    toggleModal: React.PropTypes.func.isRequired,
    clearAllRoom: React.PropTypes.func.isRequired,
    roomId: React.PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, clearAllRoom }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        roomId: getActualRoomId(state.dashboard.rooms)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearAllModal);