import React from 'react';
import { Text,ScrollView } from 'react-native';
import {Form, FormItem, Button, Input,Select } from '../common'
import appStyles from "../../styles/appStyles"

const countries = [
      { id:1, name: 'Egypt'},
      { id:2, name: 'Lebanon' },
      { id:3, name: 'UAE'}
    ]

class RegisterForm extends React.PureComponent {

constructor() {
    super();
    this.state = {
      companyName: '',
      email: '',
      phone: '',
      broilersNo: '',
    };
  }

_loginForm(){
  this.props.navigation.navigate('login');
}


render(){
  return(
     <Form>
     <ScrollView >
          {/* <FormItem>
            <Text style = {{paddingLeft: 80, fontWeight:'bold', fontSize: 15 }}> Create Free Account </Text>
          </FormItem> */}
          <FormItem>
            <Input label = "Company Name" placeholder = "Your company name" secureTextEntry = {false} numberOfLines = {1} keyboardType = "default" onChangeText={(companyName) => this.setState({ companyName  }) }/>
          </FormItem>
          <FormItem>
            <Input label = "Email" placeholder = "Your email address" secureTextEntry = {false} numberOfLines = {1} keyboardType = "default" onChangeText={(email) => this.setState({ email  }) }/>
          </FormItem>
          <FormItem>
            <Select label = "Country" data = { countries } />
          </FormItem>
          <FormItem>
            <Input label = "Phone" placeholder = "Your phone number" secureTextEntry = {false} numberOfLines = {1} keyboardType = "default" onChangeText={(phone) => this.setState({ phone }) }/>
          </FormItem>
          <FormItem>
            <Input label = "No of Broilers/Year" placeholder = "Your broilers number" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(broilersNo) => this.setState({ broilersNo }) }/>
          </FormItem>
          <FormItem>
            <Button > Register </Button>
          </FormItem>
          <FormItem>
              <Text style= {{ paddingLeft: 40 }}> Already have an account? </Text>
              <Text style={appStyles.linkStyle} onPress={ this._loginForm.bind(this) }> Login </Text>
          </FormItem>
      </ScrollView >
     </Form>
  );
 }
};


export default RegisterForm ;





