import { initialState } from '../reducers/countReducer';
import { createSelector } from 'reselect'

const selectCount = state => state.count || initialState;

const makeSelectCount = () =>
  createSelector(
    selectCount,
    countState => countState.count,
  );

export { selectCount, makeSelectCount };
