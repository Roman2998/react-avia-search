import flightsReducer from "./reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    flightsPage: flightsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;