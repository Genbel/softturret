import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './createStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// App Components
import App from './components/app';
import Dashboard from './components/dashboard/board';
import DealerBoard from './components/dealerboard/dealerboard';
import DnDWidget from './containers/dashboard/dnd/dndWidget';
import WidgetBoard from './containers/dashboard/widget/widgetBoard';
import ButtonBoard from './containers/dashboard/button/buttonBoard';
import UserBoard from './containers/dashboard/user/userBoard';
// Style loaders
import bootstrap from '../assets/stylesheets/bootstrap.css';
import style from '../assets/stylesheets/global.scss';
// Prepare our Redux Store and make available the store
export const store = ConfigureStore();

ReactDOM.render( 
	<Provider store={ store }>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="dashboard" component={Dashboard}>
					<Route path="design-board" component={DnDWidget} />
					<Route path="widget-board" component={WidgetBoard} />
					<Route path="button-board" component={ButtonBoard} />
					<Route path="user-board" component={UserBoard} />
				</Route>
				<Route path="dealerboard" component={DealerBoard}>
				</Route>
			</Route>				
		</Router>
	</Provider>
	,document.getElementById('root')
);