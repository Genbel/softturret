import { FETCH_USER_INFO, UPDATE_USER_INFO, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE } from './dashboardTypes';
import axios from 'axios';
import { APIPath } from 'config/staticPaths';

export const fetchUserInformation = ( userId ) => ({
    type: FETCH_USER_INFO,
    response: {
        username: 'Gematech', email: 'test@gematech.com', password: 'GT0000'
    }
});

export const updateUserInfo = (userData) => (dispatch) => {
    dispatch({ type: UPDATE_USER_INFO});
    return axios.post(`${APIPath}/user/update_user`, userData)
        .then(({ data }) => {
            dispatch({ type: USER_UPDATE_SUCCESS, response: data });
        })
        .catch(({ response }) => {
            dispatch({ type: USER_UPDATE_FAILURE, response: response.data });
        });

};