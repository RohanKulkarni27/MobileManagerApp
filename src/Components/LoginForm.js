import React,{Component} from 'react';
import {Card,CardSection,Button,Input, Spinner} from './Common'
import {emailChanged,passwordChanged,LoginUser} from '../Actions'
import {connect} from 'react-redux';
import{View, Text} from 'react-native';

class LoginForm extends Component {
    getEmailAddress(email){
        this.props.emailChanged(email);
    }
    getPassword(password){
        this.props.passwordChanged(password)
    }
    onButtonPress(){
        const{email,password}=this.props
        this.props.LoginUser({email,password})
    }
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.flag){
            return(
                <Spinner size="large" />
            )
        }
        else{
            return(
                <Button btntext="Login" onPress={this.onButtonPress.bind(this)}/>
            )
        }
    }
    render(){
        return(
            <Card>
                 <CardSection>
                     <Input label="email" 
                     placeholder="email@example.com"
                     onChangeText={this.getEmailAddress.bind(this)}
                     value={this.props.email}
                     />
                 </CardSection>

                 <CardSection>
                    <Input label="password" placeholder="password" secureTextEntry
                    onChangeText={this.getPassword.bind(this)}
                    />
                 </CardSection> 
                {this.renderError()}
                 <CardSection>
                     {this.renderButton()}
                 </CardSection>    
            </Card>    
        )
    }
    }

const mapStateToProps = state =>{
return {
    email : state.auth.email,
    password:state.auth.password,
    error:state.auth.error,
    flag:state.auth.flag
}
};

const styles={
    errorText:{
        color:'red',
        fontSize:20,
        alignSelf:'center'
    }
}

export default connect(mapStateToProps,{
    emailChanged,passwordChanged,LoginUser
})(LoginForm);