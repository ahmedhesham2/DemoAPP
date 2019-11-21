import React , { PureComponent } from 'react';
import {Form, FormItem, Input } from "../common"
import { Text} from "react-native"
import appStyles from "../../styles/appStyles"

import { Col, Row, Grid } from "react-native-easy-grid";
class Temperature extends PureComponent{

	constructor() {
	    super();
	    this.state = {
	     outsideTempMin: "" ,
	     outsideTempMax: "" ,
	     tempMin: "",
	     tempMax: "",
	    };
	  }

	componentWillMount(){
	      this.setState({outsideTempMin : this.props.value.outsideTempMin , outsideTempMax : this.props.value.outsideTempMax,tempMin: this.props.value.tempMin, tempMax: this.props.value.tempMax })
	  }

	
	_handleChange = (id,value) => {
		 this.props.value[id] = value
		 this.props.onChange(this.props.name, this.props.value);
		 if(id === "outsideTempMin") this.setState({outsideTempMin: value}) 
  	 	else if(id === "outsideTempMax")  this.setState({outsideTempMax: value}) 
	 	else if(id === "tempMin") this.setState({tempMin: value})
	 	else this.setState({tempMax: value})

	};

	render(){
		console.log("Render Temperature ")
		return(
			<>
				{/* <FormItem>
	 				<Text style = { appStyles.textStyle} > Temperature </Text>
				</FormItem> */}
				<Form style={{broderRadius: 50/2, backgroundColor: "white"}}><FormItem>
	 				<Text style = { appStyles.textStyle} > Outside Temp. </Text></FormItem>
					 <FormItem><Input placeholder = "Min Temp °C" value = { this.state.outsideTempMin } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('outsideTempMin',text)}  />
					 </FormItem>
					 <FormItem><Input placeholder = "Max Temp °C" value = { this.state.outsideTempMax } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('outsideTempMax',text)} />
					 </FormItem>
				</Form>
				<Form>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Inside Temp </Text>
					 </FormItem>
					 <FormItem>
					<Input placeholder = "Min Temp °C" value = {this.state.tempMin } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('tempMin',text)} />
            		</FormItem>
					<FormItem>
					<Input placeholder = "Max Temp °C" value = {this.state.tempMax} secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('tempMax',text)} />
					</FormItem>
				</Form>
			</>

	  );
	}
}


export { Temperature };
