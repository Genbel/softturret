import { renderComponent, expect } from '../../../test_helper';
import InteractionPanel from 'components/dealerboard/skeleton/InteractionPanel';

describe('InteractionPanel: Component (InteractionPanel.js)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(InteractionPanel);
    });

    it('has the correct class .interaction-panel-component', () => {
        expect(container).to.have.class("interaction-panel-component");
    });

    describe('It has specific children', () => {
        it('has the correct amount of children the component: NotificationArea and Speaker', () => {
            expect(container.children().length).to.equal(2);
        });

        it('has the Notification Area child', () => {
            expect(container.find('.notification-area-component')).to.exist;
        });

        it('has the Speaker child', () => {
            expect(container.find('.speaker-component')).to.exist;
        });
    });
});