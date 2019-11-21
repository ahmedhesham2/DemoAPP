import React , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import { Text } from 'react-native'
import appStyles from "../../styles/appStyles"


class CarbonDioxide extends PureComponent{

	constructor() {
    super();
    this.state = {
      minCO2: "",
      maxCO2: "",
      avgCO2: ""
    };
  }
  
  componentWillMount(){
      this.setState({minCO2 : this.props.value.minCO2 , maxCO2 : this.props.value.maxCO2 , avgCO2 : this.props.value.avgCO2})
  }


	_handleChange = (id,value) => {
	  this.props.value[id] = value
	  this.props.onChange(this.props.name, this.props.value);
	  if(id === "minCO2") this.setState({minCO2: value}) 
  	  else if(id === "maxCO2") this.setState({maxCO2: value})
  	  else this.setState({avgCO2: value})
	};

  render(){
		return(
			<Form>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > CO2 </Text>
				</FormItem>
				<FormItem>
            		<Input label = "Min CO2" placeholder = "" secureTextEntry = {false} value = {this.state.minCO2} keyboardType = "numeric" numberOfLines = {1} onChangeText={(text) => this._handleChange('minCO2',text)} />
				</FormItem>
				<FormItem>
            		<Input label = "Max CO2" placeholder = "" secureTextEntry = {false} value = {this.state.maxCO2} keyboardType = "numeric" numberOfLines = {1} onChangeText={(text) => this._handleChange('maxCO2',text)} />
				</FormItem>
				<FormItem>
            		<Input label = "Avg CO2" placeholder = "" secureTextEntry = {false} value = {this.state.avgCO2} keyboardType = "numeric" numberOfLines = {1} onChangeText={(text) => this._handleChange('avgCO2',text)} />
				</FormItem>
			</Form>			
	   );
	}
}


export {CarbonDioxide};