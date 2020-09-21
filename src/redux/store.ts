import {createStore, combineReducers, applyMiddleware} from "redux";
import artistReducer from './reducers/artistReducer';
import thunk from 'redux-thunk';

const combined =  combineReducers({artistReducer})  ; 
const store = createStore(combined,applyMiddleware(thunk));

export default store;