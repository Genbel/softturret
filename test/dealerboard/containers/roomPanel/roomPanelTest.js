import { renderComponent, expect } from '../../../test_helper';
import RoomPanel from 'containers/dealerboard/roomPanel/roomPanel';

describe('RoomPanel: Container (RoomPanel.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(RoomPanel);
    });

    it('has the correct class .room-panel-component', () => {
        expect(container).to.have.class("room-panel-component");
    });
});