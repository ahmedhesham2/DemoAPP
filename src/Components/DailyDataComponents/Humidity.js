import React , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import { Text } from 'react-native'
import appStyles from "../../styles/appStyles"



class Humidity extends PureComponent{

	constructor() {
	    super();
	    this.state = {
	     humidityMin: "" ,
	     humidityMax: ""  
	    };
	  }

  componentWillMount(){
      this.setState({humidityMin : this.props.value.humidityMin , humidityMax : this.props.value.humidityMax})
  }


	_handleChange = (id,value) => {
	  this.props.value[id] = value
	  this.props.onChange(this.props.name, this.props.value);
	  if(id === "humidityMin") this.setState({humidityMin: value}) 
  	  else  this.setState({humidityMax: value}) 
	};

  render(){
		return(
			<Form>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Humidity </Text>
				</FormItem>
				<FormItem>
            		<Input placeholder = "Min Hunmidity %" name="humidityMin" value = {this.state.humidityMin} secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('humidityMin',text)} />
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Max Hunmidity %"  name="humidityMax"  value = {this.state.humidityMax} secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('humidityMax',text)} />
				</FormItem>
			</Form>			
	   );
	}
}



export {Humidity};