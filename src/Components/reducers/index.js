import {combineReducers} from 'redux';
// combineReducersเป็นตัวรวมReducers 
import { userReducer } from './userReducer';

// รวมstore เช่น userReducer อาจมีหลายstore ก็ได้
const rootReducer = combineReducers({
    user:userReducer
});

export default rootReducer