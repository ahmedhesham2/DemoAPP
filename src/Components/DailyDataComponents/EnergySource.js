import React , { PureComponent }  from 'react';
import { Form, FormItem, Input, Select } from '../common'
import { Text, ScrollView, StyleSheet,TouchableOpacity,TextInput,Button } from 'react-native'
import appStyles from "../../styles/appStyles"
import tableStyles from "../../styles/tableStyles"
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { connect } from "react-redux";
import { TableComponent } from '../common'
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";
import RNPicker from "rn-modal-picker";

const tableHead= ['Time', 'Type', 'Consumed','Edit']
const tableData= [ ['', '', '','']]

const data = [
      { id:1, name: '--------------------'}
]
class EnergySource extends PureComponent{

	constructor() {
    super();
    this.state = {
      selectedType:'',
      selectedBatch: '',
      consumed: '',
      id: '',
      energyForm: {selectedType:'',selectedBatch:'',consumed:''},
      modal: false,  
    };
  }

  _selectedValue(id, index ,data) {
    energyForm = this.state.energyForm
      
    if(id === "energyTypeID"){
    	  this.props.value[id] = data.name
        this.props.onChange(this.props.name, this.props.value)
        this.setState({energyForm: {...energyForm,selectedType:data.name}})	     
    }
   else if(id === "energyDeliveryID"){
		    this.props.value[id] = data.name
        this.props.onChange(this.props.name, this.props.value)
        this.setState({energyForm: {...energyForm,selectedBatch:data.name}})
    }
   else if(id === "quantity"){
        this.props.value[id] = data
        this.props.onChange(this.props.name, this.props.value);
        this.setState({energyForm: {...energyForm,consumed:data}})
    }

  }

  componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ energyForm:{selectedType: '', selectedBatch: '' ,consumed: ''}});
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
        		 this.setState({ selectedType: rowData['data'][1], consumed: rowData['data'][2], id:key, selectedBatch:rowData['data'][4], modal:true }) 
        }
  		});
	}

  saveRow = (values) =>{
     this.props.tableData.map((rowData,index) => {
          if(parseInt(this.state.id) == rowData['id']){
            rowData['data'][1] = this.state.selectedType
            rowData['data'][2] = values["quantity"] 
            rowData['data'][4] = this.state.selectedBatch
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

  }

  render(){
		return(
			 <Form>
       <Dialog visible={this.state.modal}>
            <DialogContent style={appStyles.popupStyle}>
              < Formik initialValues = {{"quantity" : this.state.consumed , "selectedBatch" : this.state.selectedBatch , "selectedType" : this.state.selectedType  }}  onSubmit={this.saveRow} >
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
                      placeHolderLabel={"Please select Energy Source"}
                      defaultValue = {true}
                      selectedValue = {(index, name) => {this._editselectedValue("selectedType",index,name)}}
                  />
                  <Text>{'\n'}</Text>
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
                      placeHolderLabel={"Please select Batch"}
                      defaultValue = {true}
                      selectedValue = {(index, name) => {this._editselectedValue("selectedBatch",index,name)}}
                  />
                  <Text>{'\n'}</Text>
                  <Text>Consumed :  </Text>
                 <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Consumed" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
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
	 				<Text style = { appStyles.textStyle} > EnergySource </Text>
				</FormItem>
				<FormItem>
            		<Select placeholder="Type" data = { this.props.types } selectedData = {this.state.energyForm.selectedType} onPress = {this._selectedValue.bind(this,"energyTypeID")} />
				</FormItem>
				<FormItem>
            		<Select placeholder = "Batch" data = { this.props.batches } selectedData = {this.state.energyForm.selectedBatch} onPress = {this._selectedValue.bind(this,"energyDeliveryID")} />
				</FormItem>
				<FormItem>
            		<Input value = {this.state.energyForm.consumed } placeholder = "Energy Consumption" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("quantity",0,text)}/>
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
        types: state.Energy.types,
        batches: state.Energy.batches,
        tableData: state.Energy.tableData,
        save: state.Energy.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateEnergyTableData',
        data: Data,
      }),
   };
};

export default connect(mapStateToProps,mapDispatchToProps) (EnergySource); 
