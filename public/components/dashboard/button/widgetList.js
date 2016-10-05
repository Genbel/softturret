import React, { Component } from 'react';
import map from 'lodash/map';

class WidgetList extends Component {

    widgetSelected(widgetId) {
        this.props.widgetSelected(widgetId);
    }

    renderItem(widget, index){
        return (
            <li
                className="widget-item"
                key={ index }
                onClick={ () => this.widgetSelected(widget.id)}>
                <span>{ widget.text }</span>
            </li>
        );
    }

    render() {
        const { widgets } = this.props;
        return (
            <div className="widget-list col-lg-12">
                {  map(widgets, (widget, index) => {
                    return this.renderItem(widget, index);
                })}
            </div>
        )
    }
}

WidgetList.PropTypes = {
    widgetSelected: React.PropTypes.func.isRequired,
    widgets: React.PropTypes.object.isRequired
};

export default WidgetList;