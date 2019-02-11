
import {ATTEMPTING,AUTH_SUCCESS,AUTH_FAILED,LOGIN_SUCCESS
,POST_LOADING,POST_UPLOADED,POST_FAILD} from '../actions/types';

const INITIAL_STATE={
    loading:false,
    error:'',
    done:false,
}

export default  (state=INITIAL_STATE,action)=>{

    switch(action.type){

        case POST_LOADING:
        return{...state,loading:true}

        case POST_UPLOADED:
        return{...state,loading:false,done:true}

        case POST_FAILD:
        return{...state,loading:false,error:action.payload,done:false}

        default:
        return state;

    }
}