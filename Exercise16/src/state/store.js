import { createStore , combineReducers } from 'redux'
import {login} from './reducers/login'
import {dashboard} from './reducers/dashboard'

var r = combineReducers({login,dashboard});
export const store = createStore(r);