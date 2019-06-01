import { initialState } from '../reducers/userReducer';
import { createSelector } from 'reselect'

const selectUser = state => state.user || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    userState => userState.user,
  );

export { selectUser, makeSelectUser };
