import { CHANGE_USER_INFO,CHANGE_LOGIN_STATUS } from "./constants";
import {loginByPhoneRequest} from '../../../../api/request'
export const saveUserInfo = data => ({
    type:CHANGE_USER_INFO,
    data
})

export const saveLoginStatus = data => ({
    type:CHANGE_LOGIN_STATUS,
    data
})
 
export const loginByPhone = (phone,password) => {
    return dispatch => {
        // dispatch(saveUserInfo)
        loginByPhoneRequest(phone,password)
            .then(res => {
                dispatch(saveLoginStatus(true))
                console.log(res,'+++++++++++');
                dispatch(saveUserInfo(res.data));
            })
    }
}
