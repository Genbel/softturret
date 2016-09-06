import React, { Component } from 'react';
import Actionboard from './actionBoard';
import RoomPagination from 'containers/dashboard/dnd/pagination';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinner from '../../../../assets/img/gears.gif';

class Dndwidget extends Component {

	componentDidMount(){
		this.props.fetchWidgets();
	}

	renderDnDElements() {
		if(this.props.isFetching){
			const url = '../assets/img/gears.gif';
			let important = {
				backgroundImage: `url("${spinner}")`,
				width: '160px',
				height: '160px',
				marginTop: '150px',
				marginLeft: '200px'
			};
			return (<div className="row col-lg-12" style={important}></div>);
		} else {
			return (
				<div className="row">
					<div className="col-lg-12">
						<Actionboard />
					</div>
					<div className="col-lg-offset-8 col-lg-4">
						<RoomPagination />
					</div>
				</div>
			)
		}
	}

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