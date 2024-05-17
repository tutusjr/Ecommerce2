import { combineReducers , createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import drawerReducer from "./reducers/drawer";
import productsReducer from "./reducers/products";


let initialState = {

}

const reducers = combineReducers ({
    drawer: drawerReducer,
    products: productsReducer
})

const store = createStore(reducers , initialState , composeWithDevTools (applyMiddleware(thunk)));

export default store;