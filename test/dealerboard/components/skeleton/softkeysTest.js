import { renderComponent, expect } from '../../../test_helper';
import SoftKeys from 'components/dealerboard/skeleton/SoftKeys';

describe('SoftKeys: Component (SoftKeys.js)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(SoftKeys);
    });

    it('has the correct class .soft-keys-component', () => {
        expect(container).to.have.class('soft-keys-component');
    });

    describe('It has specific children', () => {
        it('has the correct amount of children the component: Turret and DialPanel', () => {
            expect(container.children().length).to.equal(2);
        });

        it('has the Notification Area child', () => {
            expect(container.find('.turret-component')).to.exist;
        });

        it('has the Speaker child', () => {
            expect(container.find('.dial-panel-component')).to.exist;
        });
    });
});