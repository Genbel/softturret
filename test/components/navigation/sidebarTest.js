import { renderComponent, expect } from '../../test_helper';
import Sidebar from '../../../public/components/navigation/sidebar';

describe('#Nav: NavigationBar (Component)', () => {

    let component;

    beforeEach(() => {
        const props = { items: [ { text: "Drag & Drop", icon: "fa fa-th", path: "/design-board" }]};
        component = renderComponent(Sidebar, props);
    });

    it('has the correct class .side-bar', () => {
        expect(component).to.have.class('side-bar');
    });
    it('contains navigation elements', () => {
        expect(component.find('ul')).to.exist;
    });
});