import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'components/modal/main';
import Header from 'components/modal/header';
import Body from 'components/modal/body';
import Footer from 'components/modal/modalFooter';
import { toggleModal } from 'actions/dashboard/modalActions';
import { removeWidget } from 'actions/dashboard/widgetActions';
import { getRemovedWidgetId } from 'reducers/dashboard/widgetReducer';
import { REMOVE_WIDGET_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';

class RemoveWidgetModal extends Component {

    removeWidget() {
        const { removedWidgetId, removeWidget } = this.props;
        removeWidget(removedWidgetId);
    }
    render() {
        const { toggleModal } = this.props;
        return (
            <div className="remove-widget-modal" >
                <Modal>
                    <Header tittle="Are you sure that you want to delete that widget?"/>
                    <Body>
                        <h1> Delete the widget</h1>
                    </Body>
                    <Footer
                        onCancel={ toggleModal }
                        onConfirm={ this.removeWidget.bind(this) }
                        cancelAction={ REMOVE_WIDGET_MODAL_CLOSED } />
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleModal, removeWidget }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        removedWidgetId: getRemovedWidgetId(state.dashboard.widgets)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveWidgetModal);