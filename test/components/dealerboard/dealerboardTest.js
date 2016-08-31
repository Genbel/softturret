import { renderComponent, expect } from '../../test_helper';
import DealerBoard from 'components/dealerboard/dealerboard';

describe('#dealerboard: DealerBoard (Component)', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(DealerBoard);
    });

    it('has the correct class .dealer-board', () => {
        expect(component).to.have.class('dealer-board');
    });
});