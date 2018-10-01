import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const {textStyle,ViewStyle} = styles;
  return(
    <View style={ViewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
   </View>
  );
};

const styles={
ViewStyle:{
  backgroundColor:'#f8f8f8',
  justifyContent:'center',
  paddingTop:15,
  alignItems:'center',
  height:60,
  shadowColor:'#000',
  shadowOffset:{width:2,height:2},
  shadowOpacity:0.2
}, 
textStyle:{
  fontSize:20
}
};

export {Header};
