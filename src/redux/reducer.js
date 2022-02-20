import {combineReducers} from "redux";
import appReducer from './app/redux'
import photoReducer from './photos/redux'
import authReducer from './auth/redux';

const reducer = combineReducers({
    app: appReducer,
    photo: photoReducer,
    auth: authReducer
})

export default reducer;