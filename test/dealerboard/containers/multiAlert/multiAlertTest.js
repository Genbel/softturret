import { renderComponent, expect } from '../../../test_helper';
import MultiAlert from 'containers/dealerboard/multiAlert/MultiAlert';

describe('MultiAlert: Container (MultiAlert.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(MultiAlert);
    });

    it('has the correct class .multi-alert-component', () => {
        expect(container).to.have.class("multi-alert-component");
    });
});