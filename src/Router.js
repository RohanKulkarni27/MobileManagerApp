import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList'
import EmployeeCreate from './Components/createEmployee';
const RouterComponent =()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial></Scene>
            </Scene>
            <Scene key="main">
                <Scene key="EList"
                component={EmployeeList} 
                 title="Employee List"
                 onRight={() => Actions.createEmployee()}
                rightTitle="Add"
                initial
                 />
                <Scene key="createEmployee" 
                component={EmployeeCreate}
                title="Create Employee"
                />
            </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;