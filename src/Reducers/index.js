import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeeFetchReducer from './employeesFetch'
export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeReducer,
    employeeFetch:EmployeeFetchReducer
})