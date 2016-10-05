import { renderComponent, expect } from '../../test_helper';
import Dashboard from '../../../public/components/dashboard/board';

describe('#dashboard: Dashboard (Component, board.js)', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Dashboard);
    });

    it('has the correct class .dashboard', () => {
       expect(component).to.have.class('dashboard');
    });

    describe('-> renders the component children', () => {
        it('contains a <Sidebar> component', () => {
            expect(component.find('.side-bar')).to.exist;
        });
        it('contains a board component. NOT WORKING. It has to check if it has children', () => {
            expect(component.find('.board')).to.exist;
        });
    });
});