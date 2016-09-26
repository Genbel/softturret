import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidgetItem from 'components/dashboard/widget/widgetItem';
import AddWidgetButton from 'containers/dashboard/widget/addWidgetButton';
import { getAllWidgets } from 'reducers/dashboard/widgetReducer';
import map from 'lodash/map';
import style from '../../../../assets/stylesheets/dashboard/widget.scss';

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
    }

    renderList() {
        return (
            <div className="widget-list">
                <AddWidgetButton />
                { this.displayWidgetItems() }
            </div>
        );
    }

    render() {
        return (
            <div className="col-lg-12 widget-list">
                <ul>
                    { this.renderList() }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        widgets: getAllWidgets(state.dashboard.widgets)
    }
};

export default connect(mapStateToProps)(WidgetList);