import React, { Component } from 'react';
import Item from './item';
import style from '../../../assets/stylesheets/sidebar/core.scss';

class Sidebar extends Component {
	renderItems() {
		return this.props.items.map(item => {
			return <Item key={ item.text } text={ item.text } icon={ item.icon } path={ item.path }/>
		});
	}
	render() {
		return (
			<div className="col-lg-3 side-bar">
				<ul> { this.renderItems() } </ul>
			</div>
		);
	}
}

Sidebar.PropTypes = {
	items: React.PropTypes.array.isRequired
};

export default Sidebar;