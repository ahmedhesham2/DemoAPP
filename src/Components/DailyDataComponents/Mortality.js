import React , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import { Text ,TouchableOpacity,TextInput,Button} from 'react-native'
import appStyles from "../../styles/appStyles"
import { TableComponent } from '../common'
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";

const tableHead= ['Time', 'Quantity', 'Weight','Edit']

class Mortality extends PureComponent{

	constructor() {
    super();
    this.state = {
      quantity: 0,
      weight: 0,
      modal: false,
      mortalityForm: {quantity:'',mortality_weight:''},  
    };
  }

 
 _handleChange = (id,value) => {
  	this.props.value[id] = value
  	this.props.onChange(this.props.name, this.props.value);
  	mortalityForm = this.state.mortalityForm
  	if(id === "quantity")
  		this.setState({ mortalityForm: {...mortalityForm, quantity: value}})
  	else if(id === "mortality_weight")
  		this.setState({ mortalityForm: {...mortalityForm, mortality_weight: value}})
  	
    //this.setState({mortalityForm:{quantity: this.props.value["quantity"], mortality_weight: this.props.value["mortality_weight"]}})
 };

componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ mortalityForm:{quantity: '', mortality_weight: '' }});
}

 editIcon = (index) => {
     return( <TouchableOpacity onPress={() => this.editValues(index)}>
        <Icon name="edit" size={25} color="#AA0000" />
      </TouchableOpacity>
      );
}

editValues = (key) =>{
  this.props.tableData.map((rowData,index) => {
        if(key == rowData['id'])
         this.setState({ quantity: rowData['data'][1], weight: rowData['data'][2], id:key, modal:true }) 
  });
}

_handleSubmit = async (values, bag) => {
	this.props.tableData.map((rowData,index) => {
    	if(parseInt(this.state.id) == rowData['id']){
	      rowData['data'][1] = values['quantity']
	      rowData['data'][2] = values['mortality_weight'] 
	      this.setState({modal: false})    
    	}
  	});
  	this.props.updateTableData(this.props.tableData)
 };

  render(){
		return(
			<Form>
				<Dialog visible={this.state.modal}>
		            <DialogContent style={appStyles.popupStyle}>
		              <Formik initialValues = {{"quantity" : this.state.quantity , "mortality_weight" : this.state.weight }} onSubmit={this._handleSubmit} >
					      { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
					        <>
					       <Text>Quantity : {'\n'} </Text>
					       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Quantity" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
					       <Text> { touched.Quantity && errors.Quantity }</Text>
					       <Text>{'\n'}</Text>

					       <Text>Weight : {'\n'} </Text>
					       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Weight" name="Weight" value={values.mortality_weight} onChangeText={ text => setFieldValue("mortality_weight", text)} ></TextInput>
					       <Text> { touched.Weight && errors.Weight }</Text>
					       <Text>{'\n'}</Text>

					        < Button title = "Save" onPress={handleSubmit} />
					        <Text>{'\n'}</Text>
					       < Button title = "Cancel" onPress={() => {this.setState({modal: false })}} />
					     
					       </>
					      )}
				      </Formik>
		            </DialogContent>
		         </Dialog>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Mortality </Text>
				</FormItem>
				<FormItem>
            		<Input placeholder = "Quantity" value = {this.state.mortalityForm.quantity } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('quantity',text)} />
				</FormItem>
				<FormItem>
            		<Input placeholder = "Weight" value = {this.state.mortalityForm.mortality_weight } secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('mortality_weight',text)} />
				</FormItem>
      			<TableComponent header = {tableHead} data = {this.props.tableData} onEdit= {this.editIcon.bind(this)} />

			</Form>			
	   );
	}
}

function mapStateTopProps(state) {
    return {
        tableData: state.Mortality.tableData,
        save: state.Mortality.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateMortalityTableData',
        data: Data,
      }),
   };
}; 

export default connect(mapStateTopProps,mapDispatchToProps) (Mortality);
