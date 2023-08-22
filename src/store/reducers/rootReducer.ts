import { combineReducers } from 'redux';
import configReducer from '@/store/reducers/config';
import userReducer from '@/store/reducers/user';

const rootReducer = combineReducers({
  config: configReducer,
  user: userReducer,
});

export default rootReducer;
