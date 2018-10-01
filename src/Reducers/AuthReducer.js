
const Initial_State = {
    email:'',
    user:null,
    password:'',
    error:'',
    flag:false
}

export default (state=Initial_State,actions) => {
    console.log(actions);
    switch(actions.type){
        case 'email_changed':
            return {...state,email:actions.payload};
        case 'password_changed':
            return {...state,password:actions.payload};
        case 'Login_User':
            return {...state,user:actions.payload,error:'',flag:false};
        case 'LogIn_Fail':
            return {...state,error:'Authentication Failed.',flag:false};
        case 'LogIn_Start':
            return {...state,flag:true,error:''}
        default:return state;
    }
 }