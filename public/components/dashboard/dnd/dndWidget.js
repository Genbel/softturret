import React, { Component } from 'react';
import Actionboard from '../../../containers/dashboard/dnd/actionBoard';
import RoomPagination from 'containers/dashboard/dnd/pagination';

export default class Dndwidget extends Component {

	render() {
		return (
			<div className="dnd-widget">
				<div className="row">
					<div className="col-lg-12">
						<div className="col-lg-12 headline">
							<h5> DnD widget: Drag the element in the position that you wish </h5>
						</div>
						<div className="col-lg-12">
							<Actionboard />
						</div>
						<div className="col-lg-offset-8 col-lg-4">
							<RoomPagination />
						</div>
					</div>
				</div>
			</div>
		);
	}
}