import React from 'react';
import {  StyleSheet, Text, TextInput,View, TouchableHighlight, Image, StatusBar , TouchableOpacity } from 'react-native';
import { Form, FormItem, Button, Input, Spinner, Header } from '../common';
import appStyles from "../../styles/appStyles";
import { get_load_data , Fetch_Governorate } from "../../Actions";
import { connect } from "react-redux" ;

class LoginForm extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }


  _onLogPassed = async () => {
    const { username, password } = this.state;
    country_code = "eg"
    this.props.navigation.navigate('loading') ;
    await(this.props.Fetch_Governorate(country_code));
    await(this.props.get_load_data());
    this.props.navigation.navigate('drawer') ;
  }

 _registerForm(){
    this.props.navigation.navigate('register');
 }

_resetPasswordForm(){
    this.props.navigation.navigate('resetpassword');
  }

// _renderButton = () => {
//     if(this.props.loading)
//       return ( <Spinner />);
//     else
//       return (<Button onPress = {this._onLogPassed.bind(this)} > Login </Button>);
// }


render(){
  return(
    <View style={styles.container}>
      <Image style = {styles.imgStyle} source={require('../../../assets/Chicken-App-Square.png')} />
      {/* <Text style={styles.labelLogo}>
       Chicken
        <Text style={styles.minilabelLogo}>
          .app
        </Text>
      </Text> */}
    <View style={styles.inputContainer}>
      {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
      <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          placeholder = "Your email address" secureTextEntry = {false} numberOfLines = {1} keyboardType = "default" onChangeText={(username) => this.setState({ username  }) }/>
          
    </View>
    
    <View style={styles.inputContainer}>
      {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
      <TextInput style={styles.inputs}
           placeholder = "Your password" secureTextEntry = {true} numberOfLines = {1} keyboardType = "default" onChangeText={(password) => this.setState({ password }) }/>
          
    </View>

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  onPress = {this._onLogPassed.bind(this)} >
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer} onPress={ this._resetPasswordForm.bind(this) }>
        <Text>Forgot your password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContainer}  onPress={ this._registerForm.bind(this) }>
        <Text>Create one</Text>
    </TouchableOpacity>
  </View>
  );
 }
};

const styles = StyleSheet.create({
  labelLogo: {
      color: "#34495e",
      fontWeight: 'bold',
      fontSize: 22,
      top: -15,
      // left: -10,
      
  },
  minilabelLogo: {
    color: "#26b99a",
    fontWeight: 'bold',
    fontSize: 22,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e9ed',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#0d4d9a",
  },
  loginText: {
    color: 'white',
  },
  imgStyle :{
		width:150,
    height:100,
    top: -15,
    left:-5,
	}

});

export default connect(null,{get_load_data,Fetch_Governorate})(LoginForm);
