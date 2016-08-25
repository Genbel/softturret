import { renderComponent, expect } from '../../../test_helper';
import Dndwidget from '../../../../public/components/dashboard/dnd/dndWidget';

describe('DnD Widget (Component)', () => {

    let component;

    beforeEach( () => {
        component = renderComponent(Dndwidget);
    });

    it('has a correct class .dnd-widget', () => {
        expect(component).to.have.class('dnd-widget');
    });

    it('has the description headline', () => {
        expect(component.find('.headline')).to.exist;
    })

    it('contains ActionBar container', () => {
        expect(component.find('.main-dnd')).to.exist;
    });
});