import React , { PureComponent } from 'react';
import { Form, FormItem, Input, Select } from '../common'
import { Text,ScrollView, TouchableOpacity, StyleSheet,TextInput,Button } from 'react-native'
import appStyles from "../../styles/appStyles"
import tableStyles from "../../styles/tableStyles"
import { TableComponent } from '../common'
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";
import { connect } from "react-redux";
import RNPicker from "rn-modal-picker";

const tableHead= ['Time', 'Name', 'Consumed','Edit']


class Medication extends PureComponent{
  
  constructor() {
    super();
    this.state = { 
      selectedType:'',
      selectedBatch: '',
      numOfBirds: '',
      appRoute: '',
      consumed: '',
      id: '',
      medicationForm: {selectedType:'',selectedBatch:'',consumed:'',numOfBirds:'',appRoute:''},
      modal: false,  
    };
  }

  _selectedValue(id, index ,data) {
    medicationForm = this.state.medicationForm
    if(id === "medicationNameID"){
    	  this.props.value[id] = data.name
        this.props.onChange(this.props.name, this.props.value);
        this.setState({medicationForm: {...medicationForm,selectedType:data.name}})
    }
	 else if(id === "medicationDeliveryID"){
        this.props.value[id] = data.name
        this.props.onChange(this.props.name, this.props.value);
		    this.setState({medicationForm: {...medicationForm,selectedBatch:data.name}})
    }
   else if(id === "medication_consumption"){
        this.props.value[id] = data
        this.props.onChange(this.props.name, this.props.value);
        this.setState({medicationForm: {...medicationForm,consumed:data}})
    }
    else if(id === "number_of_birds"){
        this.props.value[id] = data
        this.props.onChange(this.props.name, this.props.value);
        this.setState({medicationForm: {...medicationForm,numOfBirds:data}})
    }
    else{
      this.props.value[id] = data.name
      this.props.onChange(this.props.name, this.props.value);
    	this.setState({medicationForm: {...medicationForm,appRoute:data.name}})
    }

  }

  componentWillReceiveProps(nextProps) {
	  if(nextProps.save)
	    this.setState({ medicationForm:{selectedType: '', selectedBatch: '' ,consumed: '', numOfBirds:'', appRoute:''}});
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
    		 	this.setState({ selectedType: rowData['data'][1], consumed: rowData['data'][2], id:key, selectedBatch:rowData['data'][4], numOfBirds:rowData['data'][5], appRoute: rowData['data'][6] , modal:true }) 
         }
  		});
	}

  saveRow = (values) =>{
     this.props.tableData.map((rowData,index) => {
          if(parseInt(this.state.id) == rowData['id']){
            rowData['data'][1] = this.state.selectedType
            rowData['data'][2] = values["quantity"] 
            rowData['data'][4] = this.state.selectedBatch
            rowData['data'][5] = values['numOfBirds']
            rowData['data'][6] = this.state.appRoute
            this.setState({modal: false})    
          }
    });
    this.props.updateTableData(this.props.tableData)
  }

_editselectedValue(id, index, data) {
    if(id === "selectedType")
      this.setState({selectedType:data.name})
    else if(id === "selectedBatch")
       this.setState({selectedBatch:data.name})
    else if(id === "appRoute")
       this.setState({appRoute:data.name})


  }
  render(){
		return(
			<Form>
         <Dialog visible={this.state.modal}>
            <DialogContent style={appStyles.popupStyle}>
              < Formik initialValues = {{"quantity" : this.state.consumed , "selectedBatch" : this.state.selectedBatch , "selectedType" : this.state.selectedType, numOfBirds: this.state.numOfBirds, appRoute:this.state.appRoute  }}  onSubmit={this.saveRow} >
                { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
                  <>
                   <Text>{'\n'}</Text>
                    <Text>Type :  </Text>
                    <RNPicker
                      dataSource={this.props.types}
                      dummyDataSource={this.props.types}
                      defaultValue={false}
                      showSearchBar={true}
                      disablePicker={false}
                      changeAnimation={"none"}
                      searchBarPlaceHolder={"Search....."}
                      showPickerTitle={true}
                      selectedLabel={this.state.selectedType}
                      placeHolderLabel={"Please select type"}
                      defaultValue = {true}
                      selectedValue = {(index, name) => {this._editselectedValue("selectedType",index,name)}}
                  />
                  
                  <Text>Batch :  </Text>
                    <RNPicker
                      dataSource={this.props.batches}
                      dummyDataSource={this.props.batches}
                      defaultValue={false}
                      showSearchBar={true}
                      disablePicker={false}
                      changeAnimation={"none"}
                      searchBarPlaceHolder={"Search....."}
                      showPickerTitle={true}
                      selectedLabel={this.state.selectedBatch}
                      placeHolderLabel={"Please select type"}
                      defaultValue = {true}
                      selectedValue = {(index, name) => {this._editselectedValue("selectedBatch",index,name)}}
                  />
                 
                  <Text>Consumed :  </Text>
                 <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Consumed" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
                 <Text> { touched.Quantity && errors.Quantity } </Text>
                 

                 <Text>No. of birds :  </Text>
                 <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="" name="numOfBirds" value={values.numOfBirds} onChangeText={ text => setFieldValue("numOfBirds", text)} ></TextInput>
                 <Text> { touched.Quantity && errors.Quantity } </Text>
                 

                 <Text>Application Route :  </Text>
                    <RNPicker
                      dataSource={this.props.appRouteTypes}
                      dummyDataSource={this.props.appRouteTypes}
                      defaultValue={false}
                      showSearchBar={true}
                      disablePicker={false}
                      changeAnimation={"none"}
                      searchBarPlaceHolder={"Search....."}
                      showPickerTitle={true}
                      selectedLabel={this.state.appRoute}
                      placeHolderLabel={"Please select type"}
                      defaultValue = {true}
                      selectedValue = {(index, name) => {this._editselectedValue("appRoute",index,name)}}
                  />
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
	 				<Text style = { appStyles.textStyle} > Medication </Text>
				</FormItem>
				<FormItem>
            		<Select placeholder = "Name" data = { this.props.types } selectedData = {this.state.medicationForm.selectedType} onPress = {this._selectedValue.bind(this,"medicationNameID")} />
				</FormItem>
				<FormItem>
            		<Select placeholder = "Batch" data = { this.props.batches } selectedData = {this.state.medicationForm.selectedBatch} onPress = {this._selectedValue.bind(this,"medicationDeliveryID")} />
				</FormItem>
				<FormItem>
            		<Input  value = {this.state.medicationForm.consumed } placeholder = "Medication Consumption" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("medication_consumption",0,text)}/>
				</FormItem>
				<FormItem>
            		<Input placeholder = "No. of birds" value = {this.state.medicationForm.numOfBirds }  secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("number_of_birds",0,text)}/>
				</FormItem>
				<FormItem>
            		<Select placeholder = "Application Route" data = { this.props.appRouteTypes} selectedData = {this.state.medicationForm.appRoute} onPress = {this._selectedValue.bind(this,"application_route")} />
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
        types: state.Medication.types,
        batches: state.Medication.batches,
        tableData: state.Medication.tableData,
        appRouteTypes : state.Medication.appRouteTypes,
        save: state.Medication.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateMedTableData',
        data: Data,
      }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Medication); 