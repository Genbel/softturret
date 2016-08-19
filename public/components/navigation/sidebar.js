import React, { Component } from 'react';

import Item from './item';

import style from '../../../assets/stylesheets/sidebar/core.scss';

export default class Sidebar extends Component {

	renderItems() {
		return this.props.items.map(item => {
			return <Item key={ item.text } text={ item.text } icon={ item.icon } path={ item.path }/>
		});
	}

	render() {
		return (
			<div className="side-bar">
				<ul> { this.renderItems() } </ul>
			</div>
		);
	}
}