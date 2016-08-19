import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Item extends Component {

	render(){
		return (
			<div className="item">
				<li>
					<Link to={{ pathname: '/dashboard'+this.props.path }}>
						<i className={this.props.icon} aria-hidden="true"/>
						{ this.props.text } 
					</Link>
				</li>
			</div>
		);
	}
}