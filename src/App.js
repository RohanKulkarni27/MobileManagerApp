import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Text,View} from 'react-native';
import reducer from './Reducers'
import firebase from 'firebase'
import LoginForm from './Components/LoginForm'
import Router from './Router';
class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyB2IMFsd6fyzBcHCBTyotBXwlBgmSgTYSY",
            authDomain: "managerapp-8697d.firebaseapp.com",
            databaseURL: "https://managerapp-8697d.firebaseio.com",
            projectId: "managerapp-8697d",
            storageBucket: "managerapp-8697d.appspot.com",
            messagingSenderId: "694939027594"
          };
          firebase.initializeApp(config);
    }
    render(){
        return (
            <Provider store={createStore(reducer,{},applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        )
    }
}

export default App;

   