import React, { Component } from 'react';

export default class ModalFooter extends Component {
    render(){
        return (
            <div className="modal-footer-react">
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-success">Create</button>
            </div>
        );
    }
}