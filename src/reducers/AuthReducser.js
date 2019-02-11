
import {ATTEMPTING,AUTH_SUCCESS,AUTH_FAILED,LOGIN_SUCCESS
    ,POST_LOADING,POST_UPLOADED,POST_FAILD} from '../actions/types';

const INITIAL_STATE={
    loading:false,
    error:'',
    profile:null,
    signup:false,
    login:false
}

export default (state=INITIAL_STATE,action)=>{

    switch(action.type){

    case ATTEMPTING:
    return {...state,loading:true}

    case AUTH_FAILED:
    return {...state,loading:false,error:action.payload}

    case AUTH_SUCCESS:
    return {...state,loading:false,signup:true}

    case LOGIN_SUCCESS:
    return {...state,loading:false,profile:action.payload,error:'',login:action.login}

    default:
    return state;

    }


}