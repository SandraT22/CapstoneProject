import testReducer from './test-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  testReducer: testReducer,
});

export default rootReducer;