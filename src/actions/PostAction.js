
import {ATTEMPTING,AUTH_SUCCESS,AUTH_FAILED,LOGIN_SUCCESS
    ,POST_LOADING,POST_UPLOADED,POST_FAILD} from '../actions/types';

import firebase from '../components/firebase';
import {uploadImage} from './Helper';

export const  addpost =({autherID,urlImage,imageName,title})=>{

    return (dispatch)=>{
        dispatch({
            type:POST_LOADING
        });
        
        uploadImage(urlImage,'posts',imageName)
        .then((url)=>{
    
            firebase.database().ref('posts').push({url,autherID,imageName,title})
            .then((reponse)=>{
                dispatch({
                    type:POST_UPLOADED
                });
            })
            .catch((error)=>{
                handleError(dispatch,error.message);
    
            })
    
        })    };
}

const handleError =(dispatch,message) =>{

    dispatch({
        type:POST_FAILD,payload:message
    });

}

