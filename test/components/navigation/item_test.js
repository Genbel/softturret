import { renderComponent, expect } from '../../test_helper';
import Sidebar from '../../../public/components/navigation/item';

describe('NavigationItem (Component)', () => {

    let component;

    beforeEach(() => {
        const props = { text: "Drag & Drop", icon: "fa fa-th", path: "/design-board" };
        component = renderComponent(Sidebar, props, null);
    });

    it('has the correct class .item', () => {
        expect(component).to.have.class('item');
    });

    it('contains a Link component with the correct text', () => {
        expect(component.find('a')).to.contain('Drag & Drop');
    });

    it('contains a Link component with the correct href. NOT WORKING. It has to check the href attr to pass the test', () => {
        expect(component.find('a'));
    });
});