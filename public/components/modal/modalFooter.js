import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { sendingRequest } from 'reducers/dashboard/widgetReducer';

class ModalFooter extends Component {

    render(){
        const { onCancel, onConfirm, cancelAction, roomInput, isSending } = this.props;
        const confirmButtonClass = ClassNames('btn', 'btn-success', { waiting: isSending });
        return (
            <div className="modal-custom-footer">
                <button className="btn btn-cancel" onClick={() => onCancel(cancelAction)}>Cancel</button>
                <button className={ confirmButtonClass } onClick={() => onConfirm(roomInput)}>{ !isSending && 'Create' }</button>
            </div>
        );
    }
}

ModalFooter.PropTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onConfrim: React.PropTypes.func.isRequired,
    cancelAction: React.PropTypes.string.isRequired,
    roomInput: React.PropTypes.string.isRequired
};



const mapStateToProps = (state) => {
    return {
        isSending: sendingRequest(state.dashboard.widgets)
    }
};

export default connect(mapStateToProps)(ModalFooter);