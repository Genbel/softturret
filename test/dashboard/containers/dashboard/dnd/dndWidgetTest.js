import { renderComponent, expect } from '../../../../test_helper';
import Dndwidget from 'containers/dashboard/dnd/dndWidget';
import _ from 'lodash';

describe('#dashboard-dnd: The board of DnD (Component, dndWidget.js).', () => {

    it('has a correct class .dnd-widget', () => {
        const container = renderComponent(Dndwidget);
        expect(container).to.have.class('dnd-widget');
    });

    it('has the description headline', () => {
        const container = renderComponent(Dndwidget);
        expect(container.find('.headline')).to.exist;
    });

    //------- NOTE ---------//
    // These tests does not work because we set the state but after fetchWidgets function make async request,
    // and we cannot properly test because it change the state
    describe('-> renders the Component children after/before fetching', () => {
        let containerTest;
        // We try to override but it does not do. ComponentDidMount it exect but also it exect its parent componentDidMount DndWidget
        beforeEach(() => {
            containerTest = class extends Dndwidget {
                componentDidMount(){};
            };
        });
        it('contains <ActionBoard> container. THAT UNIT TEST DOES NOT OVERRIDE THE componentDidMount METHOD. IT IS WRONG', () => {
            const component = renderComponent(containerTest, null, {dashboard: { widgets: { isFetching: false }}}, true);
            expect(component.DOM.find('.main-dnd')).to.exist;
        });
        // That one is wrong
        it('contains <RoomPagination> container. THAT UNIT TEST DOES NOT OVERRIDE THE componentDidMount METHOD. IT IS WRONG', () => {
            const component = renderComponent(containerTest, null, {dashboard: { widgets: { isFetching: false }}}, true);
            expect(component.DOM.find('.room-pagination')).not.to.be.exist;
        });
    });

    describe('-> does not render the Component children because is fetching', () => {
        let container;

        beforeEach(() => {
            container = renderComponent(Dndwidget);
        });
        it('does not contain <ActionBoard> container', () => {
            expect(container.find('.main-dnd')).to.not.be.exist;
        });
        it('does not contain <RoomPagination> container', () => {
            expect(container.find('.room-pagination')).to.not.be.exist;
        });
    });
});