import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers/reducer.index';

import style from '../assets/stylesheets/global.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render( 
	<Provider store={ createStoreWithMiddleware(reducers) }>
		<App />
	</Provider>
	,document.getElementById('root'));