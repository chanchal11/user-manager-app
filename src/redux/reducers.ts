import { combineReducers } from 'redux';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './actions';

const initialUsersState: any[] = [];

const usersReducer = (state = initialUsersState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    case DELETE_USER_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case UPDATE_USER_SUCCESS:
      return state.map(user => user.id === action.payload.userId ? { ...user, ...action.payload.data } : user);
    default:
      return state;
  }
};

const loadingReducer = (state = false, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return true;
    case FETCH_USERS_SUCCESS:
    case FETCH_USERS_FAILURE:
    case DELETE_USER_SUCCESS:
    case DELETE_USER_FAILURE:
    case UPDATE_USER_SUCCESS:
    case UPDATE_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = '', action: any) => {
  switch (action.type) {
    case FETCH_USERS_FAILURE:
    case DELETE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  error: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
