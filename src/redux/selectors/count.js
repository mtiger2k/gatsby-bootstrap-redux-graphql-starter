import { initialState } from '../reducers/countReducer';

const selectCount = state => state.count || initialState;

export { selectCount };
