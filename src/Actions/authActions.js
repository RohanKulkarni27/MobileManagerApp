import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const emailChanged = (text) =>{
    return{
        type:'email_changed',
        payload:text
    }
}

export const passwordChanged =(text) =>{
    return {
        type:'password_changed',
        payload:text
    }
}

export const LoginUser = ({email,password})=>{
    return(dispatch)=>{
        dispatch({type:'LogIn_Start'});
        firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user=>LogInSuccessful(dispatch,user) )
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>LogInSuccessful(dispatch,user))
        .catch(
            ()=>LogInFail(dispatch)
        )
    })
    };

}

const LogInFail = (dispatch)=>{
    dispatch({type:'LogIn_Fail'});
}

const LogInSuccessful = (dispatch,user) =>{
    dispatch(
        {
            type:'Login_User',
            payload:user
        }
    );
    Actions.EList();
}