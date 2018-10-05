import fetchEmployee from '../Actions/employeeActions.js';

const Init_State ={

}

export default  (state=Init_State,action) =>{
switch(action.type){
    case 'Fetch_Employee':
    return action.payload;
    default:
        return Init_State;
}

}