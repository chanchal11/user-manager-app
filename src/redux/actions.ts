import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users: any) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST
});

export const deleteUserSuccess = (userId: string) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId
});

export const deleteUserFailure = (error: string) => ({
  type: DELETE_USER_FAILURE,
  payload: error
});

export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST
});

export const updateUserSuccess = (userId: string, data: any) => ({
  type: UPDATE_USER_SUCCESS,
  payload: { userId, data }
});

export const updateUserFailure = (error: string) => ({
  type: UPDATE_USER_FAILURE,
  payload: error
});

export const fetchUsers = () : any => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get('https://660160fd87c91a11641ab523.mockapi.io/users')
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};

export const deleteUser = (userId: string) : any => {
  return (dispatch: Dispatch) => {
    dispatch(deleteUserRequest());
    axios.delete(`https://660160fd87c91a11641ab523.mockapi.io/users/${userId}`)
      .then(() => {
        dispatch(deleteUserSuccess(userId));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(deleteUserFailure(errorMessage));
      });
  };
};

export const updateUser = (userId: string, data: any) : any => {
  return (dispatch: Dispatch) => {
    dispatch(updateUserRequest());
    axios.put(`https://660160fd87c91a11641ab523.mockapi.io/users/${userId}`, data)
      .then(() => {
        dispatch(updateUserSuccess(userId, data));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(updateUserFailure(errorMessage));
      });
  };
};
