import { renderComponent, expect } from '../../../test_helper';
import Dragboard from '../../../../public/containers/dashboard/dnd/dragBoard';

describe('Drag Board (Container)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(Dragboard);
    });

    it('has the correct class .drag-board', () => {
        expect(container).to.have.class('drag-board');
    });
});