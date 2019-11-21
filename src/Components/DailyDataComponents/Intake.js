import React , { PureComponent } from 'react';
import { Form, FormItem, Input, Select } from '../common'
import { Text } from 'react-native'
import appStyles from "../../styles/appStyles"
import { connect } from "react-redux";

class Intake extends PureComponent{
    constructor() {
	    super();
	    this.state = {
		     feedIntake: "" ,
		     feedType: "" ,
		     feedBatch: "",
		     feedIntake2: "",
		     feedType2: "" ,
		     feedBatch2: "" ,
		     waterIntake: "",
		     waterPH: "",
		     waterORP: "",
	    };
	  }

	  componentWillMount(){
	      this.setState({feedIntake : this.props.value.feedIntake , feedType : this.props.value.feedType, feedBatch: this.props.value.feedBatch, feedIntake2: this.props.value.feedIntake2,feedType2: this.props.value.feedType2,feedBatch2: this.props.value.feedBatch2,waterIntake: this.props.value.waterIntake,waterPH: this.props.value.waterPH,waterORP: this.props.value.waterORP })
	  }

	
	_handleChange = (id,index,data) => {
		if(id === "feedType" || id === "feedType2" || id === "feedBatch" || id === "feedBatch2"){
	 		 this.props.value[id] = data.name
	 		 this.props.onChange(this.props.name, this.props.value)
	 		 if(id === "feedType") this.setState({feedType: data.name}) 
		  	 else if(id === "feedType2")   this.setState({feedType2: data.name}) 
			 else if(id === "feedBatch")   this.setState({feedBatch: data.name})
			 else if(id === "feedBatch2")  this.setState({feedBatch2: data.name})
		}
	else{
		 this.props.value[id] = data
	 	 this.props.onChange(this.props.name, this.props.value);
		 if(id === "feedIntake")  this.setState({feedIntake: data})
		 else if(id === "feedIntake2") this.setState({feedIntake2: data})
		 else if(id === "waterIntake") this.setState({waterIntake: data})
		 else if(id === "waterORP") this.setState({waterORP: data})
		 else if(id === "waterPH") this.setState({waterPH: data})
	}
	};

  render(){
		return(
			<Form>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Intake </Text>
				</FormItem>
				<FormItem>
            		<Select label = "Type #1" placeholder= "Type #1" data = { this.props.types } selectedData = {this.state.feedType} defaultValue = {true} onPress = {this._handleChange.bind(this,"feedType")} />
				</FormItem>
				<FormItem>
            		<Select label = "Batch #1" placeholder="Batch #1" data = { this.props.batches } selectedData = {this.state.feedBatch} defaultValue = {true} onPress = {this._handleChange.bind(this,"feedBatch")} />
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Intake kg" value = {this.state.feedIntake } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('feedIntake',0,text)}/>
				</FormItem>
				<FormItem>
            		<Select label = "Type #2" placeholder = "Type #2"  data = { this.props.types } selectedData = {this.state.feedType2} defaultValue = {true} onPress = {this._handleChange.bind(this,"feedType2")} />
				</FormItem>
				<FormItem>
            		<Select label = "Batch #2" placeholder = "Batch #2"   data = { this.props.batches } selectedData = {this.state.feedBatch2} defaultValue = {true} onPress = {this._handleChange.bind(this,"feedBatch2")} />
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Intake kg"  value = {this.state.feedIntake2 } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('feedIntake2',0,text)}/>
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Water Intake" value = {this.state.waterIntake } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('waterIntake',0,text)} />
				</FormItem>
				<FormItem>
            		<Input  placeholder = "Water PH" value = {this.state.waterPH } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('waterPH',0,text)} />
				</FormItem>
				<FormItem>
            		<Input placeholder = "Water ORP" value = {this.state.waterORP } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('waterORP',0,text)} />
				</FormItem>
			</Form>			
	   );
	}
}


function mapStateToProps(state) {
    return {
        types: state.Intake.types,
        batches: state.Intake.batches,
    };pl = "Weight"
}

export default connect(mapStateToProps) (Intake); 
