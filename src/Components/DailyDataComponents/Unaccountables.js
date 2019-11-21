import React , { PureComponent } from 'react';
import { Form, FormItem, Input } from '../common'
import { Text, TextInput,TouchableOpacity,Button,StyleSheet } from 'react-native'
import appStyles from "../../styles/appStyles"
import tableStyles from "../../styles/tableStyles"
import { connect } from "react-redux";
import { TableComponent } from '../common'
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";
import RNPicker from "rn-modal-picker";

const tableHead= ['Time', 'Quantity', 'Justification', 'Edit']

class Unaccountables extends PureComponent{
  constructor() {
    super();
    this.state = {
      quantity: "",
      justification: "",
      id: '',
      unaccountablesForm: {quantity:'',justification:''},
      modal: false,  
    };
  }

  _selectedValue(id, index ,name) {
    unaccountablesForm = this.state.unaccountablesForm
    this.props.value[id] = name
    this.props.onChange(this.props.name, this.props.value);
    if(id === "quantity")
    	  this.setState({unaccountablesForm: {...unaccountablesForm, quantity:name}})
	 else if(id === "justification")
		    this.setState({unaccountablesForm: {...unaccountablesForm, justification:name}})
  }


  componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ unaccountablesForm: {quantity:'',justification:''}});
  }

  editIcon = (index) => {
     return( <TouchableOpacity onPress={() => this.editValues(index)}>
        <Icon name="edit" size={25} color="#AA0000" />
      </TouchableOpacity>
      );
   }

   editValues = (key) =>{
  		this.props.tableData.map((rowData,index) => {
        	if(key == rowData['id']){
        		this.setState({ quantity: rowData['data'][1], justification: rowData['data'][2], id:key, modal:true }) 
        }
  		});
	}

  saveRow = (values) =>{
     this.props.tableData.map((rowData,index) => {
          if(parseInt(this.state.id) == rowData['id']){
            rowData['data'][1] = values["quantity"]
            rowData['data'][2] = values["justification"] 
            this.setState({modal: false})    
          }
    });
    this.props.updateTableData(this.props.tableData)
  }

  render(){
		return(
			<Form>
				<Dialog visible={this.state.modal}>
		            <DialogContent style={appStyles.popupStyle}>
		              < Formik initialValues = {{"quantity" : this.state.quantity , "justification" : this.state.justification }}  onSubmit={this.saveRow} >
		                { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
		                  <>
		                   <Text>{'\n'}</Text>
		                    <Text>Quantity :  </Text>
		                 	<TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Quantity" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
		                 	<Text> { touched.Quantity && errors.Quantity } </Text>
		                 

		                 	<Text>Justification :  </Text>
		                 	<TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} multiline={true} numberOfLines={6} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="" name="Justification" value={values.justification} onChangeText={ text => setFieldValue("justification", text)} ></TextInput>
		                 	<Text> { touched.Quantity && errors.Quantity } </Text>
		                 
		                 
		                 <Text>{'\n'}</Text>
		                 <Button title = "Save" onPress={handleSubmit} />
		                 <Text>{'\n'}</Text>
		                 <Button title = "Cancel" onPress={() => {this.setState({modal: false })}} />
		                 </>  
		                )}
		                </Formik>
		            </DialogContent>
		         </Dialog>
				<FormItem>
	 				<Text style = { appStyles.textStyle} > Unaccountables </Text>
				</FormItem>
				<FormItem>
            		<Input label = "Quantity" value = {this.state.unaccountablesForm.quantity } placeholder = "" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("quantity",0,text)}/>
				</FormItem>
				<FormItem>
	 				<Text style = { appStyles.label} > Justification </Text>
					<TextInput value = {this.state.unaccountablesForm.justification } multiline={true} numberOfLines={6} style={{backgroundColor: 'white',width:200}} onChangeText={(text) => this._selectedValue("justification",0,text)}/>
				</FormItem>
      			<TableComponent header = {tableHead} data = {this.props.tableData} onEdit= {this.editIcon.bind(this)} onPress = {this._selectedValue.bind(this)} />

			</Form>	

	   );
	}
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});


function mapStateToProps(state) {
    return {
        tableData: state.Unaccountables.tableData,
        save: state.Unaccountables.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateUnaccountablesTableData',
        data: Data,
      }),
   };
}; 

export default connect(mapStateToProps,mapDispatchToProps) (Unaccountables);
