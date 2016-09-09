import React, { Component } from 'react';
import { Link } from 'react-router';

class Item extends Component {
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

Item.PropTypes = {
	path: React.PropTypes.string.isRequired,
	icon: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired
};

export default Item;