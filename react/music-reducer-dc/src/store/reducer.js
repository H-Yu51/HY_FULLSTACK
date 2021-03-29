


import { combineReducers } from 'redux-immutable'
import { reducer as userReducer } from '../pages/User/Login/store'
// import { reducer as rankReducer } from '../pages/Rank/store'
export default combineReducers({
    user: userReducer,
    // rank:rankReducer

})