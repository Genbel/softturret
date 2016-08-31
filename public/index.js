import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './createStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// App Components
import App from './components/app';
import Dashboard from './components/dashboard/board';
import Dealerboard from './components/dealerboard/dealerboard';
import Dndwidget from './components/dashboard/dnd/dndWidget';
import Widgetboard from './containers/dashboard/widgetBoard';
import Buttonboard from './containers/dashboard/buttonBoard';
import Userboard from './containers/dashboard/userBoard';
// Style loaders
import bootstrap from '../assets/stylesheets/bootstrap.css';
import style from '../assets/stylesheets/global.scss';
// Prepare our Redux Store
const store = ConfigureStore();

ReactDOM.render( 
	<Provider store={ store }>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="dashboard" component={Dashboard}>
					<Route path="design-board" component={Dndwidget} />
					<Route path="widget-board" component={Widgetboard} />
					<Route path="button-board" component={Buttonboard} />
					<Route path="user-board" component={Userboard} />
				</Route>
				<Route path="dealerboard" component={Dealerboard}>
				</Route>
			</Route>				
		</Router>
	</Provider>
	,document.getElementById('root')
);