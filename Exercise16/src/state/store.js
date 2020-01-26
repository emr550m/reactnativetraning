import { createStore , combineReducers } from 'redux'
import {login} from './reducers/login'
import {dashboard} from './reducers/dashboard'
import {app} from './reducers/app'

var r = combineReducers({login,dashboard,app});
export const store = createStore(r);