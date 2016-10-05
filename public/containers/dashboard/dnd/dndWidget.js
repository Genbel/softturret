import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { ADD_ROOM_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';
import ActionBoard from './actionBoard';
import ControlBoard from 'containers/dashboard/dnd/controlBoard';
import RoomPagination from 'containers/dashboard/dnd/pagination';
import spinner from '../../../../assets/img/gears.gif';

class DnDWidget extends Component {
	componentDidMount(){
		// this has to check first if we exec before the fetchWidgets
		this.props.fetchWidgets();
	}

	renderDnDElements() {
		const { isFetching } = this.props;
		if(isFetching){
			let important = {
				backgroundImage: `url("${spinner}")`,
				width: '160px',
				height: '160px',
				marginTop: '150px',
				marginLeft: '200px'
			};
			return <div className="row col-lg-12" style={ important }></div>;
		} else {
			return (
				<div className="row">
					<div className="col-lg-12">
						<ActionBoard />
					</div>
					<ControlBoard />
					<RoomPagination />
				</div>
			)
		}
	}

	render() {
		return (
			<div className="dnd-widget">
				<div className="row">
					<div className="col-lg-12 headline">
						<h5> Drag the widget in the position that you wish </h5>
					</div>
					{ this.renderDnDElements() }
				</div>
			</div>
		);
	}
}

DnDWidget.PropTypes = {
	fetchWidgets: React.PropTypes.func.isRequired,
	isFetching: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWidgets }, dispatch);
}
function mapStateToProps(state) {
	return {
		isFetching: state.dashboard.widgets.isFetching
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DnDWidget);