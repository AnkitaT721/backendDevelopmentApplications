import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addTaskReducer, deleteTaskReducer, editTaskReducer, getTasksReducer } from "./reducers";

const reducer = combineReducers({
addTask: addTaskReducer,
getTasks: getTasksReducer,
editTask: editTaskReducer,
deleteTask: deleteTaskReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;