import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { getModalState } from 'reducers/dashboard/modalReducer';
import { ADD_ROOM_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Footer from 'components/modal/Footer';


class ActionBoard extends Component {

    renderAddRoomModal(){
        return (
            <Modal>
                <Footer />
            </Modal>
        )
    }

    render(){
        const { toggleModal, addRoomModalIsOpen } = this.props;
        return (
            <div className="control-board col-lg-6">
                <div className="col-lg-4">
                    <button className="btn btn-danger">Clear</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-danger">Clear all</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-info" onClick={ () => toggleModal(ADD_ROOM_MODAL_OPENED)}> Add </button>
                    {addRoomModalIsOpen && this.renderAddRoomModal()}
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
        addRoomModalIsOpen: getModalState(state.dashboard.modals, 'addModal')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBoard);