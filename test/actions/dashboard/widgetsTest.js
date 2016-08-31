//import { expect } from '../../test_helper';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import expect from 'expect';
import { APIPath } from 'config/staticPaths';
import { FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST } from 'actions/dashboard/dashboardTypes';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Widgets dashboard async actions', () => {
   afterEach(() => {
      nock.cleanAll()
   });
   it('returns a successful fethWidgets mocked respose', () => {
      nock(APIPath)
         .post('/fetch_widgets')
         .reply(200, fetched_data );
      const expectedActions = [
         { type: FETCH_WIDGETS_REQUEST},
         { type: FETCH_WIDGETS_SUCCESS, response: fetched_data }
      ];
      const store = mockStore({ dashboard: {} });

      return store.dispatch(fetchWidgets())
         .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
         });
   });
});

const fetched_data = {
   widgets: {
      1: {
         type: 'GS',
         position: 1,
         text: 'Lina Familly',
         attached: true,
         id: 1
      }
   },
   rooms: {
      'asdf2kf0asdfnasdf90': {
         type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
         text: 'Surrounding People',
         widgets: [1]
      }
   }
};