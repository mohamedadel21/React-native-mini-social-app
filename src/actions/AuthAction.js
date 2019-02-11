import {ATTEMPTING,AUTH_SUCCESS,AUTH_FAILED,LOGIN_SUCCESS} from '../actions/types';
import firebase from '../components/firebase';
import {uploadImage} from './Helper';

export default  signup=({photoURI,fullName,email,password,address,phone})=>{

    return (dispatch)=>{
        dispatch({
            type:ATTEMPTING
        });

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            console.log(response);
           createAccount(dispatch,response.user.uid,photoURI,fullName,email,password,address,phone);

        })
        .catch(error=>{
            handleError(dispatch,error.message);
        });

    }


}

export const login =({email,password})=>{

    
    return (dispatch)=>{
        dispatch({
            type:ATTEMPTING
        });

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((resp)=>{
        getProfile(dispatch,resp.user.uid);

    })
    .catch((error)=>{
        handleError(dispatch,error.message);

    })
    

}}

const getProfile =(dispatch,uid)=>{

  

    firebase.database().ref('profiles/'+uid).on('value',(snapshot)=>{
        const data=snapshot.val();
        
        const profile={
            
            id:uid,
            url:data.url,
            fullName:data.fullName,
            email:data.email,
            password:data.password,
            address:data.address,
            phone:data.phone,

        }
        dispatch({
            type:LOGIN_SUCCESS, payload:profile,login:true
        });

    })


}



const  createAccount =(dispatch,uid,photoURI,fullName,email,password,address,phone)=>{
    
    let image =uid+'.jpg';

    uploadImage(photoURI,'profiles',image)
    .then((url)=>{

        firebase.database().ref('profiles/'+uid).set({url,fullName,email,address,phone})
        .then((reponse)=>{
            dispatch({
                type:AUTH_SUCCESS
            });
        })
        .catch((error)=>{
            handleError(dispatch,error.message);

        })

    })

}


const handleError =(dispatch,message) =>{

    dispatch({
        type:AUTH_FAILED,payload:message
    });


}
