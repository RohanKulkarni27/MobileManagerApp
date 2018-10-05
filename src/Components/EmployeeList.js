import React ,{Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from 'react-redux';
import {fetchEmployee} from '../Actions';
class EmployeeList extends Component {
    componentWillMount(){
        this.props.fetchEmployee();
    }
    render(){
        return(
            <View>
                <Text>Employee1</Text>
                <Text>Employee2</Text>
                <Text>Employee3</Text>
                <Text>Employee4</Text>
                <Text>Employee5</Text>
            </View>
        )
    }
    
}

export default connect(null,{fetchEmployee})(EmployeeList);