import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

  return(
      <TouchableOpacity style={styles.button} onPress = {props.onPress} >
        <Text style={styles.textStyle}>
          {props.children}
        </Text>
      </TouchableOpacity>    
  )
}

const styles = StyleSheet.create({

  textStyle: {
      alignSelf: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      paddingTop: 10,
      paddingBottom: 10,
  },
  button:{
      flex:1,
      height:45,
      borderRadius:5,
      marginHorizontal: 25,
      marginVertical: 10,
      backgroundColor: '#0d4d9a',
      justifyContent: 'center',
  }

});

export { Button };

