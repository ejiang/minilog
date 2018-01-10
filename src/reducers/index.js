import { combineReducers } from 'redux';
import ReducerLogContent from './reducer_log_content';

const rootReducer = combineReducers({
  logContent: ReducerLogContent
});

export default rootReducer;
