import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from 'containers/general/errors/errorMessage';
import WidgetItem from 'containers/dashboard/widget/widgetItem';
import { getAllWidgets } from 'reducers/dashboard/widgetReducer';
import { getWidgetError } from 'reducers/dashboard/errorReducer';
import map from 'lodash/map';

class WidgetList extends Component {

    displayWidgetItems() {
        return map(this.props.widgets, (widget, index) => {
            return (
                <WidgetItem
                    key={ index }
                    widget={ widget }
                />
            );
        })
    };

    renderList() {
        return (
            <div className="widget-list">
                { this.displayWidgetItems() }
            </div>
        );
    }

    render() {
        return (
            <div className="col-lg-12 widget-list">
                <ErrorMessage reducerSelector={ getWidgetError }/>
                <ul>
                    { this.renderList() }
                </ul>
            </div>
        );
    }
}

WidgetList.PropTypes = {
    widgets: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        widgets: getAllWidgets(state.dashboard.widgets)
    }
};

export default connect(mapStateToProps)(WidgetList);