import { renderComponent, expect } from '../../../test_helper';
import Actionboard from '../../../../public/containers/dashboard/dnd/actionBoard';

describe('ActionBoard (Container)', () => {
    let container;

    beforeEach(() => {
        container = renderComponent(Actionboard);
    });

    it('has the correct class .main-dnd', () => {
        expect(container).to.have.class('main-dnd');
    });

    it('contains DragWidget container', () => {
        expect(container.find('.drag-board')).to.exist;
    });

    it('contains DropWidget container', () => {
        expect(container.find('.drop-board')).to.exist;
    });
});