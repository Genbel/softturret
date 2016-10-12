import { renderComponent, expect } from '../../../test_helper';
import Speaker from 'containers/dealerboard/speaker/Speaker';

describe('Speaker: Container (Speaker.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(Speaker);
    });

    it('has the correct class .speaker-component', () => {
        expect(container).to.have.class("speaker-component");
    });
});