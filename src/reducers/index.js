import { combineReducers } from "redux";
import medicineList from "./med-list-reducer";
import { firebaseStateReducer as firebase } from "react-redux-firebase";

const combinedReducer = combineReducers({
  firebase,
  medicineList
});

export default combinedReducer;
