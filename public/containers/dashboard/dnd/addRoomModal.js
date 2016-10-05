import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { addNewRoom } from 'actions/dashboard/roomsActions';
import { ADD_ROOM_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Body from 'components/modal/body';
import WidgetTemplate from 'components/dashboard/dnd/WidgetTemplate';
import Footer from 'components/modal/modalFooter';


class AddRoomModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTemplate: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.selectedTemplate === nextState.selectedTemplate;
    }

    setSelectedWidget(selectedTemplate) {
        this.setState({ selectedTemplate });
    }

    createNewRoom() {
        if(this.roomInput.value === '') {
            this.roomInput.classList.add("warning-focus");
        } else if(this.state.selectedTemplate === 0) {
            this.roomInput.classList.remove("warning-focus");
            document.getElementsByClassName("widget-templates")[0].classList.add("warning-focus");
        } else {
            const selectedTemplate = this.state.selectedTemplate;
            this.props.addNewRoom(this.roomInput.value, selectedTemplate);
            this.roomInput.classList.remove("warning-focus");
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
                    <h5>Choose the template that you want for your widget</h5>
                    <WidgetTemplate setSelectedWidget = { this.setSelectedWidget.bind(this) }/>
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