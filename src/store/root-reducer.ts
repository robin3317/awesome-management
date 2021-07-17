import { combineReducers } from 'redux';
import memberReducer from './reducers/member.reducers';

const rootReducer = combineReducers({
  member: memberReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
