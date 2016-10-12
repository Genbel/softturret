import { renderComponent, expect } from '../test_helper';
import DealerBoard from 'containers/dealerboard/DealerBoard';

describe('DealerBoard: Container (DealerBoard.js)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(DealerBoard);
    });

    it('has the correct class .dealer-board-component', () => {
        expect(container).to.have.class('dealer-board-component');
    });

    it('has the correct children the component: RoomPanel, SoftKeys and InteractionPanel', () => {
        expect(container.children().length).to.equal(3);
    });
});