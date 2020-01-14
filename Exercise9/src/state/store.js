import { createStore , combineReducers } from 'redux'
import {page1} from './reducers/page1'
import {page2} from './reducers/page2'

var r = combineReducers({page1,page2});
export const store = createStore(r);