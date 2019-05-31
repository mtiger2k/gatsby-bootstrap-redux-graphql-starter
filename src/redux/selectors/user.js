import { initialState } from '../reducers/userReducer';

const selectUser = state => state.user || initialState;

export { selectUser };
