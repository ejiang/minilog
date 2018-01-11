import { combineReducers } from 'redux';
import ReducerLogContent from './reducer_log_content';
import ReducerQuery from './reducer_query';

const rootReducer = combineReducers({
  logContent: ReducerLogContent,
  currentQuery: ReducerQuery
});

export default rootReducer;
