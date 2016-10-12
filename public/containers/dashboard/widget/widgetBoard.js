import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { getModalState } from 'reducers/dashboard/modalReducer';
import WidgetList from './widgetList';
import RemoveWidgetModal from './removeWidgetModal';
import AddWidgetButton from 'containers/dashboard/widget/addWidgetButton';
import style from '../../../../assets/stylesheets/dashboard/widget.scss';

class WidgetBoard extends Component {

	componentDidMount() {
		// this has to check first if we exec before the fetchWidgets
		this.props.fetchWidgets();
	}

	renderWidgetComponents(){
		return (
			<div className="widget-board">
				<AddWidgetButton />
				<WidgetList />
				{ this.props.removeWidgetModalIsOpen && <RemoveWidgetModal />}
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
	fetchWidgets: React.PropTypes.func.isRequired,
	removeWidgetModalIsOpen: React.PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchWidgets }, dispatch);
};

const mapStateToProps = (state) => {
	return {
		removeWidgetModalIsOpen: getModalState(state.dashboard.modals, 'removeWidget')
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBoard);