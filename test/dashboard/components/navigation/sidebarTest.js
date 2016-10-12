import { renderComponent, expect } from '../../../test_helper';
import Sidebar from '../../../../public/components/navigation/sidebar';

describe('#dashboard-nav: NavigationBar (Component, sidebar.js)', () => {

    let component;

    beforeEach(() => {
        const props = { items: [ { text: "Drag & Drop", icon: "fa fa-th", path: "/design-board" }]};
        component = renderComponent(Sidebar, props);
    });

    it('has the correct class .side-bar', () => {
        expect(component).to.have.class('side-bar');
    });
    it('contains navigation elements', () => {
        expect(component.find('li').length).to.equal(1);
    });
});