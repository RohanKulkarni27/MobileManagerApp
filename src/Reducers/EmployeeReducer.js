import employeeUpdate from '../Actions/employeeActions.js';

const Init_State = {
name:'',
phone:'',
shift:''
};

export default  (state=Init_State,action) =>{
    switch(action.type){
        case 'Employee_Update':
        //action.payload == {props:'name',value:'Rohan'}
            return{...state,[action.payload.props]:action.payload.value}
        default:
        return state
    }
}