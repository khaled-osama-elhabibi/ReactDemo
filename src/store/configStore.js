import { createStore } from "redux";
import authReducer from "./reducers/authReducers";

const configStore = () => {
  return createStore(authReducer);
};

export default configStore;
