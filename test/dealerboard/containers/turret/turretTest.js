import { renderComponent, expect } from '../../../test_helper';
import Turret from 'containers/dealerboard/turret/Turret';

describe('Turret: Container (Turret.js)', () => {

    let container;

    beforeEach(() => {
        container = renderComponent(Turret);
    });

    it('has the correct class .turret-component', () => {
        expect(container).to.have.class("turret-component");
    });
});