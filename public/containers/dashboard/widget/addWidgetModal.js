import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'actions/dashboard/modalActions';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Body from 'components/modal/body';
import Footer from 'components/modal/modalFooter';
import ErrorMessage from 'containers/general/errors/errorMessage';
import { addWidget } from 'actions/dashboard/widgetActions';
import { sendingRequest } from 'reducers/dashboard/widgetReducer';
import { getWidgetError } from 'reducers/dashboard/errorReducer';
import { ADD_WIDGET, ADD_WIDGET_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';

class AddWidgetModal extends Component {

    checkFieldStates() {
        var warning = false;
        const input = this.widgetInput;
        const select = this.widgetType;
        if(input.value === '') {
            warning = true;
            input.classList.add("warning");
        } else {
            input.classList.remove("warning");
        }
        if(Number(select.value) === 0) {
            warning = true;
            select.classList.add("warning");
        } else {
            select.classList.remove("warning")
        }
        return warning;
    }

    createNewWidget(){
        const warning = this.checkFieldStates();
        if(!warning) {
            const widget = { widgetName: this.widgetInput.value, widgetType: Number(this.widgetType.value) };
            this.props.addWidget(widget);
        }
    }

    render(){
        const { toggleModal } = this.props;
        console.log('componennt re-rendered');
        return (
            <div className="add-widget-modal-root">
                <Modal className="modal-component-sm add-widget-modal">
                    <Header
                        className="add"
                        tittle="Add new widget to add new channels" />
                    <Body>
                        <ErrorMessage reducerSelector={ getWidgetError }/>
                        <div className="form-group">
                            <label htmlFor="widget-name">Widget Name</label>
                            <input type="text" className="form-control" id="widget-name" ref={(node) => this.widgetInput = node} />
                        </div>
                        <div className="widget-types">
                            <label>Choose Widget Type</label>
                            <select ref={(node) => this.widgetType = node } className="wa">
                                <option value="0"></option>
                                <option value="1">Gematech Small</option>
                                <option value="3">Conference Bridge Small</option>
                                <option value="2">Gematech Medium</option>
                                <option value="4">Conference Bridge Medium</option>
                            </select>
                        </div>
                    </Body>
                    <Footer
                        onCancel={ toggleModal }
                        onConfirm={ this.createNewWidget.bind(this) }
                        cancelAction={ ADD_WIDGET_MODAL_CLOSED }
                        comfirmButtonClass="add"
                        actionText="Create"
                        reducerSelector={ sendingRequest }
                        reducerType="widgets"/>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, addWidget }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddWidgetModal);