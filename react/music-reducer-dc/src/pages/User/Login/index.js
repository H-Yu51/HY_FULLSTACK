import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  {loginByPhone} from './store/actionCreators'
const Login = (props) => {
    const {userInfo, loginByPhoneDispatch}=props
    console.log(userInfo);
    useEffect(() => {
        loginByPhoneDispatch('19979113182','codingdream123');
    },[])
    return (
        <div>

        </div>
    )
}
const mapStateToProps = state => ({
    userInfo: state.getIn(["user", "userInfo"])
})
const mapDispatchToProps=dispatch=>{
    return{
        loginByPhoneDispatch(phone,password){
            dispatch(loginByPhone(phone,password))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login))
