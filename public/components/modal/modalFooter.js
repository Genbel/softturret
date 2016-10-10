import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import { sendingRequest } from 'reducers/dashboard/widgetReducer';

class ModalFooter extends Component {

    render(){
        const { onCancel, onConfirm, cancelAction, roomInput, isSending, comfirmButtonClass, actionText } = this.props;
        const confirmButtonClass = ClassNames('btn', 'btn-success', { waiting: isSending }, comfirmButtonClass);
        return (
            <div className="modal-custom-footer">
                <button className="btn btn-cancel" onClick={() => onCancel(cancelAction)}>Cancel</button>
                <button className={ confirmButtonClass } onClick={() => onConfirm(roomInput)}>{ !isSending && actionText }</button>
            </div>
        );
    }
}

ModalFooter.PropTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onConfrim: React.PropTypes.func.isRequired,
    cancelAction: React.PropTypes.string.isRequired,
    roomInput: React.PropTypes.string.isRequired,
    comfirmButtonClass: React.PropTypes.string.isRequired,
    reducerType: React.PropTypes.string.isRequired,
    isSending: React.PropTypes.bool.isRequired,
    reducerSelector: React.PropTypes.func.isRequired
};



const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        isSending: ownProps.reducerSelector(state.dashboard[ownProps.reducerType])
    }
};

export default connect(mapStateToProps)(ModalFooter);