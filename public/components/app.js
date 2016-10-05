import React, { Component } from 'react';

class App extends Component {
  	render() {
    	return (
        	<div className="app">
        		{this.props.children}
        	</div>
    	);
  	}
}
App.PropTypes = {
	children: React.PropTypes.node.isRequired
};
export default App;