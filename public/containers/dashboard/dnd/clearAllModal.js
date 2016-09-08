import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { CLEAR_ALL_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Footer from 'components/modal/Footer';

class ClearAllModal extends Component {
    render() {
        const { toggleModal } = this.props;
        return (
            <div className="clear-all-modal">
                <Modal>
                    <Header tittle='Clear all the widget from the room' />
                    <Footer onCancel={toggleModal} cancelAction={ CLEAR_ALL_MODAL_CLOSED } />
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(ClearAllModal);