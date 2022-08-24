import { combineReducers } from "redux";

import counterReducer from './counter/counterReducer.js';
import dynamicCounterReducer from './dynamicCounter/dynamicCounterReducer.js';

export const rootReducer = combineReducers({
    counter: counterReducer,
    dCounter: dynamicCounterReducer,
})