import React, { Component } from 'react';

class ModalFooter extends Component {
    render(){
        const { onCancel, onConfirm, cancelAction, roomInput } = this.props;
        return (
            <div className="modal-custom-footer">
                <button className="btn btn-cancel" onClick={() => onCancel(cancelAction)}>Cancel</button>
                <button className="btn btn-success" onClick={() => onConfirm(roomInput)}>Create</button>
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

export default ModalFooter;