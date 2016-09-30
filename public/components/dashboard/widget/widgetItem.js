import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class WidgetItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            editMode: false,
            widgetName: props.widget.text
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ widgetName: nextProps.widget.text });
    }

    onInputChange(event) {
        this.setState({ widgetName: event.target.value });
    }

    spanClicked(text) {
        // we have to display the modal
    }

    changeWidgetName(event) {
        event.preventDefault();
        if( this.state.widgetName === '' ) {
            console.log(' You cannot save that widget name because is empty')
        } else {
            this.setState({ editMode: false });
        }
    }

    changeToEditState(event) {
        this.setState({ editMode: true });
    }
    onEnter() {
        this.setState({ hover: true });
    }
    onLeave() {
        this.setState({ hover: false });
    }

    renderNotEditElement() {
        const { widget } = this.props;
        return (
            <li
                className="widget-item"
                onMouseEnter={ () => this.onEnter() }
                onMouseLeave={ () => this.onLeave() } >
                <span
                    className={ widget.attached }
                    onClick={ () => this.spanClicked(widget.text) }/>
                <span
                    className="widget-name"
                    onClick={ () => this.changeToEditState(widget.text) }>
                    { this.state.widgetName } { this.state.hover && <span className="widget-type">{ widget.type } widget</span> }
                </span>
            </li>
        )
    }

    renderEditElement() {
        return (
            <li className="widget-item">
                <form onSubmit={ this.changeWidgetName.bind(this) } className="input-group">
                    <input
                        placeholder="What kind of name would you like for that widget?"
                        className="form-control"
                        value={ this.state.widgetName }
                        onChange={ this.onInputChange.bind(this) }/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary btn-edit">
                                <FontAwesome name="check-circle-o" />
                            </button>
                        </span>
                </form>
            </li>
        );
    }

    render() {
        return !this.state.editMode?
            this.renderNotEditElement():
            this.renderEditElement();

    }
}

export default WidgetItem;