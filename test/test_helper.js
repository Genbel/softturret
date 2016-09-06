import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './configureTestStore';
import chaiJquery from 'chai-jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = _$(global.window);

function renderComponent(ComponentClass, props, state, rawComponent = false){
	if(rawComponent){
		const componentInstance_II = TestUtils.renderIntoDocument(
			<Provider store={ store(state) }>
				<ComponentClass { ...props } />
			</Provider>
		);
		return {DOM: $(ReactDOM.findDOMNode(componentInstance_II)), rawComponent: componentInstance_II };
	} else {
		const componentInstance = TestUtils.renderIntoDocument(
			<Provider store={ store(state) }>
				<ComponentClass { ...props } />
			</Provider>
		);
		return $(ReactDOM.findDOMNode(componentInstance));
	}
}

$.fn.simulate = function(eventName, value = null) {
	if(value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

chai.use(spies);
chaiJquery(chai, chai.util, $);

global.navigator = {
	userAgent: 'node.js'
};

export { renderComponent, expect, chai };