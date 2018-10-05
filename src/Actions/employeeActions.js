
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({props,value})=>{
    return  {
        type:'Employee_Update',
        payload:{props,value}
    }
}

export const employeeGenerate = ({nameSaved,contactSaved,shift}) =>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`user/${currentUser.uid}/employees`)
    .push({nameSaved,contactSaved,shift})
    .then(()=>{
        dispatch({type:'Employee_Create'})
        Actions.EList()
    })
    .catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
    }
    
}

export const fetchEmployee = () =>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`user/${currentUser.uid}/employees`).
        on(
            'value',
            snapshot=>{
                dispatch({type:'Fetch_Employee',payload:snapshot.val()})
            }
        )
    }
}
