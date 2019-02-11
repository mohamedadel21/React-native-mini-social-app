import {combineReducers} from 'redux';
import AuthReducer from '../reducers/AuthReducser'
import PostReducer from '../reducers/PostReducer'
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');
export default combineReducers({
    auth:AuthReducer,
    post:PostReducer
}) 