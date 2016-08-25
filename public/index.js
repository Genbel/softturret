import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Dashboard from './components/dashboard/board';
import Dndwidget from './components/dashboard/dnd/dndWidget';
import Widgetboard from './containers/dashboard/widgetBoard';
import Buttonboard from './containers/dashboard/buttonBoard';
import Userboard from './containers/dashboard/userBoard';

import reducers from './reducers/reducerIndex.js';

// Style loaders
import bootstrap from '../assets/stylesheets/bootstrap.css';
import style from '../assets/stylesheets/global.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render( 
	<Provider store={ createStoreWithMiddleware(reducers) }>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="dashboard" component={Dashboard}>
					<Route path="design-board" component={Dndwidget} />
					<Route path="widget-board" component={Widgetboard} />
					<Route path="button-board" component={Buttonboard} />
					<Route path="user-board" component={Userboard} />
				</Route>
			</Route>				
		</Router>
	</Provider>
	,document.getElementById('root'));