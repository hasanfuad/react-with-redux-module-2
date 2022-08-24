import { combineReducers } from "redux";

import counterReducer from './counter/counterReducer.js';
import dynamicReducer from './dynamicHooksCounter/dynamicReducer.js';

export const rootReducer = combineReducers({
    counter: counterReducer,
    dCounter: dynamicReducer,
})