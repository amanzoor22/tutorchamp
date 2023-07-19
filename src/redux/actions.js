import * as types from './actionType'
//import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const register_start=()=>({
    type:types.REGISTER_START
})
const register_success=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user
})
const register_fail=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error
})
const login_start=()=>({
    type:types.LOGIN_START
})
const login_success=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
   
})
const login_fail=(error)=>({
    type:types.LOGIN_FAIL,
    payload:error

})
const logout_start=()=>({
    type:types.LOGOUT_START
})
const logout_success=()=>({
    type:types.LOGOUT_SUCCESS,
    
})
const logout_fail=(error)=>({
    type:types.LOGOUT_FAIL,
    payload:error

})
export const registerInitiate=( firstname, lastname, email, password)=>{
    console.log("DONE" ,firstname,lastname,email,password)
    return function(dispatch){
        dispatch(register_start({}))
        createUserWithEmailAndPassword( email, password)
        .then (({user})=>{
            //alert(user)
            user.displayName=firstname+lastname
            dispatch(register_success(user))
        })
        .catch((error)=>dispatch(register_fail(error.message)))
    }
}
export const LoginInitiate=(email, password)=>{
    return function(dispatch){
        dispatch(login_start({}))
        signInWithEmailAndPassword( email, password)
        .then (({user})=>{
           
            dispatch(login_success(user))
        })
        .catch((error)=>dispatch(login_fail(error.message)))
    }
}
export const LogoutInitiate=()=>{
    return function(dispatch){
        dispatch(logout_start())
        signOut()
        .then ((resp)=>{
            dispatch(logout_success())
        })
        .catch((error)=>dispatch(logout_fail(error.message)))
    }
}