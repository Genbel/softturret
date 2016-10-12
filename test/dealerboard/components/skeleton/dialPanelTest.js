import { renderComponent, expect } from '../../../test_helper';
import DialPanel from 'components/dealerboard/skeleton/DialPanel';

describe('DialPanel: Component (DialPanel.js)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(DialPanel);
    });

    it('has the correct class .dial-panel-component', () => {
        expect(container).to.have.class('dial-panel-component');
    });

    describe('It has specific children', () => {
        it('has the correct amount of children the component: MultiAlert and Handset', () => {
            expect(container.children().length).to.equal(2);
        });

        it('has the MultiAlert child', () => {
            expect(container.find('.multi-alert-component')).to.exist;
        });

        it('has the Handset child', () => {
            expect(container.find('.handset-component')).to.exist;
        });
    });
});