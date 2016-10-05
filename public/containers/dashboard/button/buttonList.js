import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeButtonName } from 'actions/dashboard/widgetActions';
import ButtonItem from 'containers/dashboard/button/buttonItem';
import { getWidgetButtons } from 'reducers/dashboard/widgetReducer';
import map from 'lodash/map';

class ButtonList extends Component {

    changeButtonName(buttonName, buttonId) {
        this.props.changeButtonName({ widgetId: this.props.widgetId, buttonId: buttonId, buttonName: buttonName });
    }

    renderButtonItems() {
        return map(this.props.widget.buttons, (button, key) => {
            return <ButtonItem
                        key={ key }
                        id={key}
                        widgetId={ this.props.widgetId }
                        button={ button }
                        changeButtonName={ (buttonName, widgetId) => this.changeButtonName(buttonName, widgetId) }/>
        });
    }

    render() {
        return (
            <div className="button-list">
                <ul>{ this.renderButtonItems() }</ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeButtonName }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
    return {
        widget: getWidgetButtons(state.dashboard.widgets, ownProps.widgetId)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);