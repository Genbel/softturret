import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../../index';
import { Provider } from 'react-redux';
import style from '../../../assets/stylesheets/others/modal.scss';

class Modal extends Component {

    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'modal';
        // Append to body tag
        document.body.appendChild(this.modalTarget);
        this._render();
        //document.getElementById('root').setAttribute('style','opacity: 0.8; background-color:#000');
    }
    // Whenever the component is about the update. Make sure if we get new sets of components inside of the modal
    // rerender again all the component
    componentWillUpdate() {
        this._render();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }

    // We will render all the children that has this.modalTarget div
    // this.props.children it will render all the elements that are inside of that modal component
    _render() {
        ReactDOM.render(
            <Provider store={store}>
                <div className="modal-component">
                    <div>{ this.props.children }</div>
                </div>
            </Provider>,
            this.modalTarget
        );
    }

    render() {
        // It means render nothing
        return < noscript />;
    }
}

export default Modal;