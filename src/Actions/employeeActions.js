
import firebase from 'firebase';
export const employeeUpdate = ({props,value})=>{
    return  {
        type:'Employee_Update',
        payload:{props,value}
    }
}

export const employeeGenerate = ({nameSaved,contactSaved,shift}) =>{
    const {currentUser} = firebase.auth();
    firebase.database().ref(`user/${currentUser.uid}/employees`)
    .push({nameSaved,contactSaved,shift}).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}