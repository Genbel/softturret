import { renderComponent, expect } from '../../../test_helper';
import Dndwidget from 'components/dashboard/dnd/dndWidget';

describe('#dashboard-dnd: The board of DnD (Component, dndWidget.js).', () => {

    let component;

    beforeEach( () => {
        component = renderComponent(Dndwidget);
    });

    it('has a correct class .dnd-widget', () => {
        expect(component).to.have.class('dnd-widget');
    });

    it('has the description headline', () => {
        expect(component.find('.headline')).to.exist;
    });

    describe('-> renders the Component children', () => {
        it('contains <ActionBoard> container', () => {
            expect(component.find('.main-dnd')).to.exist;
        });
        it('contains <RoomPagination> container', () => {
            expect(component.find('.room-pagination')).to.exist;
        });
    });
});