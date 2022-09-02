import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import cardsReducer from "./cards-reducer";
import filterReducer from "./filter-reducer";



let reducers = combineReducers({
    cardsPage: cardsReducer,
    filterPage: filterReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;