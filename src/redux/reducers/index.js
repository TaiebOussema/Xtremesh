/* eslint-disable */
import hostsReducer from './hostsReducer';
import authReducer from './authReducer';

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    hosts: hostsReducer,
    auth: authReducer
});

export default rootReducer