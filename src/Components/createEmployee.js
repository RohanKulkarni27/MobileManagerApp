//Creating Employee creation form
import React,{Component} from 'react';
import {Card,CardSection,Button,Input, Spinner} from './Common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeGenerate} from '../Actions';
import {Picker,Text} from 'react-native';
class EmployeeCreate extends Component{
    onButtonPress(){
        const nameSaved = this.props.name;
        const contactSaved = this.props.phone;
        const shift = this.props.shift;
      
        this.props.employeeGenerate({nameSaved,contactSaved,shift:shift||'Monday'})
    }
    getName(text){
        this.props.employeeUpdate({props:'name',value:text})
    }
    getNumber(number){
        this.props.employeeUpdate({props:'phone',value:number})
    }
    getShift(day){
        this.props.employeeUpdate({props:'shift',value:day})
    }
    render(){
        return(
           <Card>
               <CardSection>
                <Input label="Name" 
                placeholder="Name" 
              value={this.props.name}
                onChangeText={this.getName.bind(this)}
                />
                </CardSection>

                <CardSection>
                <Input label="Phone Number"
                value={this.props.phone}
                onChangeText={this.getNumber.bind(this)}
                placeholder="555-555-5555" />
                </CardSection>

                <CardSection style={{flexDirection:'column'}}>
                <Text style={styles.containerStyle}>Shift</Text>
                    <Picker selectedValue={this.props.shift}
                        onValueChange={this.getShift.bind(this)}
                        style={{flex:1}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection> 

                <CardSection>
                     <Button onPress={this.onButtonPress.bind(this)} btntext="Save" />
                </CardSection> 
            </Card>
        )
    }
    
}

const styles ={
    containerStyle:{
        fontSize:18,
        paddingLeft:20
    }
}

const mapStateToProps = (state) => {
   console.log(state.employeeForm.name)
    return{
       name:state.employeeForm.name,
        phone:state.employeeForm.phone,
        shift:state.employeeForm.shift
    }
}

export default connect(mapStateToProps,{employeeUpdate,employeeGenerate})(EmployeeCreate);