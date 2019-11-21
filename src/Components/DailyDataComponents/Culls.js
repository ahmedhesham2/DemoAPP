import React , { PureComponent } from 'react';
import { Form, FormItem, Input, Select } from '../common'
import { Text,TouchableOpacity,TextInput,StyleSheet,Button } from 'react-native'
import appStyles from "../../styles/appStyles"
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { TableComponent } from '../common'
import { connect } from "react-redux";
import RNPicker from "rn-modal-picker";
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from "formik";

const tableHead =  ['Time', 'Quantity', 'Weight', 'Edit']

class Culls extends PureComponent{

	constructor() {
    super();
    this.state = {
      quantity: '',
      weight: '',
      selectedType:'',
      id: '',
      cullsForm: {quantity:'',culls_weight:'',selectedType:''},
      modal: false,  
    };
  }
  
editValues = (key) =>{
  this.props.tableData.map((rowData,index) => {
        if(key == rowData['id']){
         this.setState({ quantity: rowData['data'][1], weight: rowData['data'][2], id:key, selectedType:rowData['data'][4], modal:true }) 
        }
  });
}

_handleChange = (id,value) => {
  this.props.value[id] = value
  this.props.onChange(this.props.name, this.props.value);
  
  cullsForm = this.state.cullsForm
  if(id == "quantity"){
    this.setState({cullsForm:{...cullsForm , quantity:value}})
  }
  else if(id == "culls_weight"){
    this.setState({cullsForm:{...cullsForm, culls_weight:value}})
  }
  else{
    this.setState({cullsForm:{...cullsForm, selectedType:value}})
  }
 
  
  //this.setState({cullsForm:{quantity: this.props.value["quantity"], culls_weight: this.state.val, selectedType:this.props.value["culls_type"]}})
};


componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ cullsForm:{quantity: '', culls_weight: '' ,selectedType: ''}});
}

editIcon = (index) => {
     return( <TouchableOpacity onPress={() => this.editValues(index)}>
        <Icon name="edit" size={25} color="#AA0000" />
      </TouchableOpacity>
      );
    }

saveRow = (values) =>{
   this.props.tableData.map((rowData,index) => {
        if(parseInt(this.state.id) == rowData['id']){
          rowData['data'][1] = values["quantity"]
          rowData['data'][2] = values["culls_weight"] 
          rowData['data'][4] = this.state.selectedType
          this.setState({modal: false})    
        }
  });
  this.props.updateTableData(this.props.tableData)
  
}

_selectedValue(index, data) {
    cullsForm = this.state.cullsForm
    this.props.value["culls_type"] = data.name
    this.props.onChange(this.props.name, this.props.value);
    this.setState({cullsForm: {...cullsForm,selectedType:data.name}})
  }

_editselectedValue(index, data) {
    this.setState({selectedType:data.name})
  }

  render(){
		return(
			<Form>
          <Dialog visible={this.state.modal}>
            <DialogContent style={appStyles.popupStyle}>
              < Formik initialValues = {{"quantity" : this.state.quantity , "culls_weight" : this.state.weight , "culls_type" : this.state.selectedType ,"unaccounted_quantity":0  }}  onSubmit={this.saveRow} >
                { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
                  <>
                   <Text>{'\n'}</Text>
                 <Text>Quantity :  </Text>
                 <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Quantity" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
                 <Text> { touched.Quantity && errors.Quantity } </Text>
                 <Text>{'\n'}</Text>

                 <Text>Weight :  </Text>
                 <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Weight" name="Weight" value={values.culls_weight} onChangeText={ text => setFieldValue("culls_weight", text)} ></TextInput>
                 <Text> { touched.Weight && errors.Weight } </Text>
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
                      selectedValue = {(index, name) => {this._editselectedValue(index,name)}}
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
	 				<Text style = { appStyles.textStyle} > Culls </Text>
				</FormItem>
				<FormItem>
            		<Input placeholder = "Quantity"  value = {this.state.cullsForm.quantity } name = "quantity" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('quantity',text)} />
				</FormItem>
				<FormItem>
            		<Input placeholder = "Weight"  value = { this.state.cullsForm.culls_weight } name= "culls_weight" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._handleChange('culls_weight',text)} />
				</FormItem>
				 <FormItem>
            		<Select placeholder="Culls Type"  data = { this.props.types } selectedData = {this.state.cullsForm.selectedType} onPress = {this._selectedValue.bind(this)} />
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
        types: state.Culls.types,
        tableData: state.Culls.tableData,
        save: state.Culls.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateCullsTableData',
        data: Data,
      }),
   };
};

export default connect(mapStateToProps,mapDispatchToProps) (Culls);