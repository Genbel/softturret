import { renderComponent, expect } from '../../../test_helper';
import Actionboard from '../../../../public/containers/dashboard/dnd/actionBoard';
import { getFullObjectOfTheState } from '../../../mockElements/dashboard/states';

describe('#dashboard-dnd: ActionBoard (Container, actionBoard.js)', () => {

    let container;
    const state = getFullObjectOfTheState();

    beforeEach(() => {
        container = renderComponent(Actionboard, undefined, state);
    });

    it('has the correct class .main-dnd', () => {
        expect(container).to.have.class('main-dnd');
    });

    it('contains DragWidget component', () => {
        expect(container.find('.drag-board')).to.exist;
    });

    it('contains DropWidget component', () => {
        expect(container.find('.drop-board')).to.exist;
    });

    it('renders the room widgets in the drop board', () => {
        expect(container.find('.drop-board .drop').length).to.equal(8);
    });

    it('renders the disconnected widgets in the drag board', () => {
        expect(container.find('.drag-board .drag').length).to.equal(2);
    });
});