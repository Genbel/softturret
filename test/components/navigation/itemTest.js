import { renderComponent, expect } from '../../test_helper';
import Item from '../../../public/components/navigation/item';

describe('#Nav: NavigationItem (Component)', () => {

    let component;

    beforeEach(() => {
        const props = { text: "Drag & Drop", icon: "fa fa-th", path: "/design-board" };
        // If we set the last argument as null, it throws an error because the state can be an object or undefined
        component = renderComponent(Item, props, undefined);
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