import { renderComponent, expect } from '../test_helper';
import App from '../../public/components/app';

describe('App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('has the correct class .app', () => {
		expect(component).to.have.class('app');
	});
});