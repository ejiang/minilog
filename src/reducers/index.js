import { combineReducers } from 'redux';
import ReducerLogContent from './reducer_log_content';
import ReducerQuery from './reducer_query';
import ReducerLive from './reducer_live';

const rootReducer = combineReducers({
  logContent: ReducerLogContent,
  currentQuery: ReducerQuery,
  live: ReducerLive
});

export default rootReducer;
