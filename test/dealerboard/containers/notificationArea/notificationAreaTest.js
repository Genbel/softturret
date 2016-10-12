import { renderComponent, expect } from '../../../test_helper';
import NotificationArea from 'containers/dealerboard/notificationArea/NotificationArea';

describe('NotificationArea: Container (NotificationArea.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(NotificationArea);
    });

    it('has the correct class .notification-area-component', () => {
        expect(container).to.have.class("notification-area-component");
    });
});