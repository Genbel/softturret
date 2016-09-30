import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeWidgetName } from 'actions/dashboard/widgetActions';
import { getWidgetUpdateState } from 'reducers/dashboard/widgetReducer';

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
            // It should be good to add a in the placeholder that message
            console.log(' You cannot save that widget name because is empty')
        } else {
            // that one should be when the request is successful
            //this.setState({ editMode: false });
            this.props.changeWidgetName({ widgetId: this.props.widget.id, widgetName: this.state.widgetName });
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
                            { this.props.updating === undefined && <button type="submit" className="btn btn-primary btn-edit">
                                <FontAwesome name="check-circle-o" />
                            </button> }
                        </span>
                </form>
            </li>
        );
    }

    render() {
        console.log('widgetIsUpdating: ', this.props.updating, ', widgetId: ', this.props.widget.id);
        return !this.state.editMode?
            this.renderNotEditElement():
            this.renderEditElement();

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeWidgetName }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
    return {
        updating: getWidgetUpdateState(state.dashboard.widgets, ownProps.widget.id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetItem);