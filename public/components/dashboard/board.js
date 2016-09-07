import React, { Component } from 'react';
import Sidebar from '../navigation/sidebar';
import style from '../../../assets/stylesheets/dashboard/core.scss';

const items = [
	{ text: "Drag & Drop", icon: "fa fa-th", path: "/design-board"},
	{ text: "Customize Widget", icon: "fa fa-square-o", path: "/widget-board"},
	{ text: "Edit Buttons", icon: "fa fa-pencil", path: "/button-board"},
	{ text: "User Management", icon: "fa fa-user", path: "/user-board"}
];

export default class Dashboard extends Component {

	render() {
		return (
			<div className="container-fluid dashboard">
				<div className="row">
					<div className="col-md-3">
						<Sidebar items={items} />
					</div>
					<div className="col-md-9">
						<div className="board">
							{ this.props.children || "Welcome to the dashboard" }
						</div>
					</div>
				</div>
			</div>
		);
	}
}