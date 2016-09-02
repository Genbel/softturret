//import { expect } from '../../test_helper';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import expect from 'expect';
import { APIPath } from 'config/staticPaths';
import { FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST } from 'actions/dashboard/dashboardTypes';
import { widgetsFetchedData } from '../../mockElements/dashboard/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('#dashboard-dnd-actions: Widgets actions (ActionCreator)', () => {
   afterEach(() => {
      nock.cleanAll()
   });
   it('creates FETCH_WIDGETS_SUCCESS when fetching widgets has been done. ASYNC', () => {
      nock(APIPath)
         .post('/fetch_widgets')
         .reply(200, widgetsFetchedData() );
      const expectedActions = [
         { type: FETCH_WIDGETS_REQUEST},
         { type: FETCH_WIDGETS_SUCCESS, response: widgetsFetchedData() }
      ];
      const store = mockStore({ dashboard: {} });

      return store.dispatch(fetchWidgets())
         .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
         });
   });
});