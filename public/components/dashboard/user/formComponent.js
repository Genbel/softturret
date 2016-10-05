import React, { Component } from 'react';
import classNames from 'classnames';

class FormField extends Component {

    render() {
        const { type, label, value, error, inputType, onInputChange, errorMessage } = this.props;
        const inputClass = classNames( 'form-control', { warning: error });
        return (
            <div className="form-group">
                <label>{ label }</label>
                <input
                    type={type}
                    className={ inputClass }
                    value={ value }
                    onChange={ (event) => onInputChange(event, inputType) }/>
                { error && <small className="form-text text-muted">{ errorMessage }</small> }
            </div>
        );
    }
}

export default FormField;