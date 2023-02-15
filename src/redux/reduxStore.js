import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage : profilePageReducer,
    messagePage : messagePageReducer,
    usersPage : usersPageReducer,
    auth : authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))


export default store