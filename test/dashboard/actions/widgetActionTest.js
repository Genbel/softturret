//import { expect } from '../../test_helper';
import { fetchWidgets, widgetActionInTheRoom } from 'actions/dashboard/widgetActions';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import expect from 'expect';
import { APIPath } from 'config/staticPaths';
import { FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, UNIT_WIDGET_EDITED, UNIT_WIDGET_SUCCESS, UNIT_WIDGET_FAILED } from 'actions/dashboard/dashboardTypes';
import { widgetsFetchedData, unitWidgetArgument, unitWidgetActionCreatorObject } from '../../mockElements/dashboard/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('#dashboard-dnd-actions: Widgets actions (ActionCreator, widgetAction.js)', () => {
   afterEach(() => {
      nock.cleanAll()
   });
   it('creates FETCH_WIDGETS_SUCCESS when fetching widgets has been done. ASYNC', () => {
      nock(APIPath)
         .post('/widget/fetch_widgets')
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
   it('creates UNIT_WIDGET_SUCCESS when we update. ASYNC', () => {
      const actionCreatorArguments = unitWidgetArgument(true);
      nock(APIPath)
         .post('/room/edit_rooom')
         .reply(200, 'ok');
      const expectedActions = [
         { type: UNIT_WIDGET_EDITED, response: actionCreatorArguments },
         { type: UNIT_WIDGET_SUCCESS, response: actionCreatorArguments }
      ];

      const store = mockStore({ dashboard: {} });
      return store.dispatch(widgetActionInTheRoom(actionCreatorArguments))
         .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
         })
   });
   it('creates UNIT_WIDGET_FAILED when it tries to update the widget and it fails. ASYNC', () => {
      const actionCreatorArguments = unitWidgetArgument(true);
      nock(APIPath)
          .post('/room/edit_rooom')
          .reply(400, 'It was an error while we were saving, try it again!' );
      const expectedActions = [
         { type: UNIT_WIDGET_EDITED, response: actionCreatorArguments },
         { type: UNIT_WIDGET_FAILED, response: unitWidgetActionCreatorObject(true) }
      ];

      const store = mockStore({ dashboard: {} });
      return store.dispatch(widgetActionInTheRoom(actionCreatorArguments))
          .then(() => {
             expect(store.getActions()).toEqual(expectedActions);
          })
   });
});