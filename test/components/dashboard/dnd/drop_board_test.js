import { renderComponent, expect } from '../../../test_helper';
import Dropboard from '../../../../public/containers/dashboard/dnd/drop_board';

describe('Drop Board (Container)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(Dropboard);
    });

    it('has the correct class .drop-board', () => {
        expect(container).to.have.class('drop-board');
    });
});