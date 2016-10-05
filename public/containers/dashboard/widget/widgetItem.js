import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeWidgetName, showWidgetRemoveModal } from 'actions/dashboard/widgetActions';
import { getWidgetUpdateState } from 'reducers/dashboard/widgetReducer';
import { REMOVE_WIDGET_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';

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
        !nextProps.updating && this.setState({ widgetName: nextProps.widget.text });
        // Our item has been updated so set the item to not editMode
        this.props.updating && !nextProps.updating && this.setState({ editMode: false });
    }

    onInputChange(event) {
        this.setState({ widgetName: event.target.value });
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

    spanClicked() {
        const{ attached, id } = this.props.widget;
        if(!attached) {
            this.props.showWidgetRemoveModal(id);
        }
    }

    changeWidgetName(event) {
        event.preventDefault();
        if( this.state.widgetName !== '' ) {
            this.props.changeWidgetName({ widgetId: this.props.widget.id, widgetName: this.state.widgetName });
        }
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
                    onClick={ () => this.spanClicked() }/>
                <span
                    className="widget-name"
                    onClick={ () => this.changeToEditState(widget.text) }>
                    { this.state.widgetName } { this.state.hover && <span className="widget-type">{ widget.type } widget</span> }
                </span>
            </li>
        )
    }

    renderItemAction() {
            if(!this.props.updating) {
                return (
                    <button type="submit" className="btn btn-primary btn-edit">
                        <FontAwesome name="check-circle-o" />
                    </button>
                );
            } else {
                return (
                    <div className="save-spinner"></div>
                )
            }
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
                        { this.renderItemAction() }
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showWidgetRemoveModal, changeWidgetName }, (dispatch));
};

const mapStateToProps = (state, ownProps) => {
    return {
        updating: getWidgetUpdateState(state.dashboard.widgets, ownProps.widget.id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetItem);