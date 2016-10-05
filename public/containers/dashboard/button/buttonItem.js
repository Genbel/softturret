import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import Classnames from 'classnames';

class ButtonItem extends Component {

    constructor(props) {
        super(props);
        const name = props.button.display_text === null? '' : props.button.display_text;
        this.state = {
            hover: false,
            editMode: false,
            buttonName: name
        };
    }

    onEnter() {
        this.setState({ hover: true });
    }
    onLeave() {
        this.setState({ hover: false });
    }

    changeToEditState() {
        this.props.button.channel_ref !== null && this.setState({ editMode: true });
    }

    onInputChange(event) {
        this.setState({ buttonName: event.target.value });
    }

    changeButtonName(event) {
        console.log(this.state.buttonName);
        event.preventDefault();
        this.props.changeButtonName(this.state.buttonName, this.props.id);
        this.setState({ editMode: false });
    }

    getButtonTextToDisplay(displayText, channelRef, position) {
        if(channelRef === null) {
            return { display: 'Not assigned', channel: 'Button ' + position, customClass: false };
        } else {
            if( displayText === null) {
                return { display: 'Set the custom tag', channel: channelRef, customClass: false };
            } else {
                return { display: this.state.buttonName, channel: channelRef, customClass: true };
            }
        }
    }

    renderText(text, customClassName) {
        return (
            <div className="text">
                <ul>
                    <li className={ customClassName }>{ text.display }</li>
                    <li className="default">{ text.channel }</li>
                </ul>
            </div>
        );
    }

    renderNumber() {
        const { button } = this.props;
        return (
            <div className="number">
                { this.state.hover &&
                <span className="button-name">{ `Button ${button.position}` }</span> }
            </div>
        );
    }

    renderItemAction() {
        /*if(!this.props.updating) {
            return (
                <button type="submit" className="btn btn-primary btn-edit">
                    <FontAwesome name="check-circle-o" />
                </button>
            );
        } else {
            return (
                <div className="save-spinner"></div>
            )
        }*/

        return (
            <div className="action-content">
                <button type="submit" className="btn btn-primary btn-edit">
                    <FontAwesome name="check-circle-o" />
                </button>
            </div>
        );
    }

    renderEditItem(text, customClassName) {
        return (
            <li className="button-item">
                <form onSubmit={ this.changeButtonName.bind(this) } className="input-group button-content">
                    <div className="text">
                        <ul>
                            <li className={ customClassName }>
                                <input
                                    placeholder="What kind of name would you like for that button?"
                                    className="form-control"
                                    value={ this.state.buttonName }
                                    onChange={ this.onInputChange.bind(this) } />
                            </li>
                            <li className="default">{ text.channel }</li>
                        </ul>
                    </div>
                    { this.renderItemAction() }
                </form>
            </li>
        );
    }

    renderDescription(text, customClassName) {
        return (
            <li
                className="button-item"
                onMouseEnter={ () => this.onEnter() }
                onMouseLeave={ () => this.onLeave() }
                onClick={ () => this.changeToEditState() }>
                <div className="button-content">
                    { this.renderText(text, customClassName) }
                    { this.renderNumber() }
                </div>
            </li>
        );
    }

    render() {
        const { button } = this.props;
        const text = this.getButtonTextToDisplay(button.display_text, button.channel_ref, button.position);
        const customClassName = Classnames({ custom: text.customClass, 'not-assigned': !text.customClass  });
        return !this.state.editMode?
            this.renderDescription(text, customClassName) :
            this.renderEditItem(text, customClassName);
    }
}

ButtonItem.PropTypes = {
    button: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired,
    changeButtonName: React.PropTypes.func.isRequired
};

/*const mapStateToProps = (state, ownProps) => {
    return {
        updating: getButtonUpdateState(state.dashboard.widgets, ownProps.id)
    }
};
 ,
 getButtonUpdateState: React.PropTypes.bool.isRequired
export default connect(mapStateToProps)(ButtonItem);*/
export default ButtonItem;