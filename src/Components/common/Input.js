import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
// import { TextField } from 'react-native-material-textfield';


const Input = (props) => {
  return (
    <View style= {styles.inputContainer}>

      <Text style= {styles.label}>{props.label}</Text>
     <TextInput
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType = {props.keyboardType}
        onChangeText={props.onChangeText}
        numberOfLines={props.numberOfLines}
        multiline={true}
        style = {styles.input}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
     flex:1,
  },
  label: {
    fontSize: 15,
    paddingLeft: 10,
    color:'#rgb(42,55,68)',
  },
  input: {
      margin: 10,
      marginTop: -5,
      height: 40,
      borderTopColor: "white",
      borderLeftColor: "white",
      borderRightColor: "white",
      borderBottomColor: '#rgb(42,55,68)',
      borderWidth: 0.5
  }

});

export { Input }

