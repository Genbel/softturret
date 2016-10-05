import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import WidgetList from './widgetList';
import style from '../../../../assets/stylesheets/dashboard/widget.scss';

class WidgetBoard extends Component {

	componentDidMount() {
		// this has to check first if we exec before the fetchWidgets
		this.props.fetchWidgets();
	}

	renderWidgetComponents(){
		return (
			<div className="widget-board">
				<WidgetList />
			</div>
		)
	}

	render() {
		return (
			<div className="widget-board">
				<div  className="row">
					<div className="col-lg-12 headline">
						<h5> Edit your widgets of the softturret </h5>
					</div>
					{ this.renderWidgetComponents() }
				</div>
			</div>
		);
	}
}

WidgetBoard.PropTypes = {
	fetchWidgets: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchWidgets }, dispatch);
};

export default connect(null, mapDispatchToProps)(WidgetBoard);