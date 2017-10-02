import { combineReducers } from 'redux';
import medList from './med-list-reducer';

const combinedReducer = combineReducers({
  medList
});

export default combinedReducer;
