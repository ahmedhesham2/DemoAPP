import React from 'react';
import { Text } from 'react-native';
import {Form, FormItem, Button, Input, Header } from '../common'
import appStyles from "../../styles/appStyles"

class ResetPasswordForm extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

 _loginForm(){
    this.props.navigation.navigate('login');
 }

render(){
  return(
      <Form>
         
          {/* <FormItem>
            <Text style = {{ paddingLeft:100 }}> Forgot Password </Text>
          </FormItem> */}
          <FormItem>
            <Input label = "Email" placeholder = "Your email address" secureTextEntry = {false} numberOfLines = {1} keyboardType = "default" onChangeText={(username) => this.setState({ username  }) }/>
          </FormItem>
          <FormItem>
            <Button> Send Email </Button>
          </FormItem>
          <FormItem>
              <Text style= {{ paddingLeft: 40 }}> Already have an account? </Text>
              <Text style={appStyles.linkStyle} onPress={ this._loginForm.bind(this) }> Login </Text>
          </FormItem>
      </Form>
  );
 }
};


export default ResetPasswordForm ;





