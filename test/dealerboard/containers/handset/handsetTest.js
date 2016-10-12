import { renderComponent, expect } from '../../../test_helper';
import Handset from 'containers/dealerboard/handset/Handset';

describe('Handset: Container (Handset.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(Handset);
    });

    it('has the correct class .handset-component', () => {
        expect(container).to.have.class("handset-component");
    });
});