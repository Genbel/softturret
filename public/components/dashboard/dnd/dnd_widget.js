import React, { Component } from 'react';
import Actionboard from '../../../containers/dashboard/dnd/action_board';

export default class Dndwidget extends Component {

	render() {
		return (
			<div className="dnd-widget">
				<div className="row">
					<div className="col-lg-12">
						<div className="col-lg-12">
							<h5> DnD widget: Drag the element in the position that you wish </h5>
						</div>
						<div className="col-lg-12">
							<Actionboard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}