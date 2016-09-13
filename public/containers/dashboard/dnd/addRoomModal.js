import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { addNewRoom } from 'actions/dashboard/roomsActions';
import { ADD_ROOM_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Body from 'components/modal/body';
import Footer from 'components/modal/Footer';


class AddRoomModal extends Component {

    createNewRoom() {
        if(this.roomInput.value === '') {
            this.roomInput.classList.add("focus");
        } else {
            const type = ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'];
            this.props.addNewRoom(this.roomInput.value, type);
            this.roomInput.classList.remove("focus");
            console.log(this.roomInput.value);
        }
    }
    // onConfirm is a functional property
    render(){
        const { toggleModal } = this.props;
        return (
          <div className="add-room-modal">
              <Modal>
                  <Header tittle='Add Room in your soft turret' />
                  <Body className="red">
                    <div className="form-group">
                        <label htmlFor="room-name">Room Name</label>
                        <input type="text" className="form-control" id="room-name" ref={(node) => this.roomInput = node} />
                    </div>
                  </Body>
                  <Footer onCancel={ toggleModal } onConfirm={ this.createNewRoom.bind(this) } cancelAction={ ADD_ROOM_MODAL_CLOSED }/>
              </Modal>
          </div>
        );
    }
}

AddRoomModal.PropTypes = {
    toggleModal: React.PropTypes.func.isRequired,
    addNewRoom: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, addNewRoom }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddRoomModal);