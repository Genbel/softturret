import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { ADD_ROOM_MODAL_OPENED } from 'actions/dashboard/dashboardTypes';
import Actionboard from './actionBoard';
import ControlBoard from 'containers/dashboard/dnd/controlBoard';
import RoomPagination from 'containers/dashboard/dnd/pagination';
import spinner from '../../../../assets/img/gears.gif';

import Colors from 'components/modal/color';

class Dndwidget extends Component {

	componentDidMount(){
		this.props.fetchWidgets();
	}

	renderDnDElements() {
		const { isFetching, toggleModal, addRoomModalIsOpen } = this.props;
		if(isFetching){
			let important = {
				backgroundImage: `url("${spinner}")`,
				width: '160px',
				height: '160px',
				marginTop: '150px',
				marginLeft: '200px'
			};
			return <div className="row col-lg-12" style={important}></div>;
		} else {
			return (
				<div className="row">
					<div className="col-lg-12">
						<Actionboard />
					</div>
					<ControlBoard />
					<RoomPagination />
				</div>
			)
		}
	}

	//{ addRoomModalIsOpen && this.renderModal() }

	render() {
		return (
			<div className="dnd-widget">
				<div className="row">
					<div className="col-lg-12">
						<div className="col-lg-12 headline">
							<h5> DnD widget: Drag the element in the position that you wish </h5>
						</div>
						{ this.renderDnDElements() }
					</div>
				</div>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWidgets }, dispatch);
}
function mapStateToProps(state) {
	return {
		isFetching: state.dashboard.widgets.isFetching
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dndwidget);