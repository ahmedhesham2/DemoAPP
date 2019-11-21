import React , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import {  Text } from 'react-native'
import appStyles from "../../styles/appStyles"

class Weight extends PureComponent{

	constructor() {
	    super();
	    this.state = {
	     weight: "" ,
	    };
	  }

  componentWillMount(){
      this.setState({weight : this.props.value })
  }


	_handleChange = (id,value) => {
	  this.props.onChange(this.props.name, value);
	  this.setState({weight: value})
	};
  

  render(){
		return(
			<Form>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Weight </Text>
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Weight KG"  value = {this.state.weight} secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('weight',text)} />
				</FormItem>
			</Form>			
	   );
	}
}


export {Weight};