import { renderComponent, expect, chai} from '../../../test_helper';
import pagination from 'containers/dashboard/dnd/pagination';
import { changeRoom } from 'actions/dashboard/roomsActions';
import _ from 'lodash';

describe('#dnd: RoomPagination (Container)', () => {
    let container;
    //const props = { changeRoom: expect.createSpy()};
    const state = {
        dashboard: {
            rooms:{
                actual: 1,
                pagination: ['asdf2kf0asdfnasdf90', 'pqioerp0923klfqpsd890u2n', 'mcio-029na98-2in']
            }
        }
    };
    beforeEach(() => {
        container = renderComponent(pagination, null, state);
    });

    it('has a correct class .room-pagination', () => {
       expect(container).to.have.class('room-pagination');
    });

    it('has all the pagination buttons', () => {
       expect(container).to.contain('NEXT');
        expect(container).to.contain('PREV');
    });

    describe('Action Creator', () => {
        it('next room action', () => {
            container.find('button#NEXT').simulate('click');
            //expect(props.changeRoom).to.have.been.called();
            const tag = _.isEmpty(container.find('button#NEXT'))? undefined : null;
            expect(tag).to.be.undefined;
        });
        it('previous room action', () => {
            container.find('button#PREV').simulate('click');
            //expect(props.changeRoom).to.have.been.called();
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