import React, { Component } from 'react';
import AddWidgetModal from './addWidgetModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import { getModalState } from 'reducers/dashboard/modalReducer';
import { ADD_WIDGET_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';

class AddWidgetButton extends Component {
    render() {
        const { toggleModal, addWidgetModalIsOpen } = this.props;
        return (
            <div className="add-widget-button">
                <button className="btn btn-info" onClick={ () => toggleModal(ADD_WIDGET_MODAL_OPENED) }> Add Widget </button>
                { addWidgetModalIsOpen && <AddWidgetModal hello="how are you?"/> }
            </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({ toggleModal }, dispatch);
};

const mapStateToProps = ( state ) => {
    return {
        addWidgetModalIsOpen: getModalState(state.dashboard.modals, 'addWidget')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetButton);