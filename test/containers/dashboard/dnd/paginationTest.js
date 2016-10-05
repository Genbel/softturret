import { renderComponent, expect, chai} from '../../../test_helper';
import pagination from 'containers/dashboard/dnd/pagination';
import { changeRoom } from 'actions/dashboard/roomsActions';
import { getPaginationStateObject } from '../../../mockElements/dashboard/states';
import _ from 'lodash';

describe('#dashboard-dnd: RoomPagination (Container, pagination.js)', () => {

    let container;
    const state = getPaginationStateObject();

    beforeEach(() => {
        container = renderComponent(pagination, null, state);
    });

    it('has a correct class .room-pagination', () => {
        expect(container).to.have.class('room-pagination');
    });

    it('has all the pagination buttons', () => {
        expect(container.find(".fa-arrow-circle-o-right")).to.exist;
        expect(container.find(".fa-arrow-circle-o-left")).to.exist;
    });

    it('displays the pagination amount', () => {
       expect(container.find("#pagination-text p")).to.contain('2/3');
    });

    describe('-> pagination action creator change the UI', () => {
        it('change to the next room', () => {
            container.find('button#NEXT').simulate('click');
            const tag = _.isEmpty(container.find('button#NEXT'))? undefined : null;
            expect(tag).to.be.undefined;
        });
        it('change to the previous room', () => {
            container.find('button#PREV').simulate('click');
            const tag = _.isEmpty(container.find('button#PREV'))? undefined : null;
            expect(tag).to.be.undefined;
        });
        /*it('has been called', () => {
            container.find('button#PREV').simulate('click');
            console.log(props.changeRoom);
            expect(props.changeRoom).toHaveBeenCalled();
        });*/
    });
});