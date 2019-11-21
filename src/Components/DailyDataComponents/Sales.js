import React , { PureComponent } from 'react';
import { Form, FormItem, Input, Select } from '../common'
import { Text,ScrollView,TouchableOpacity,TextInput,Button,StyleSheet  } from 'react-native'
import appStyles from "../../styles/appStyles"
import tableStyles from "../../styles/tableStyles"
import { connect } from "react-redux";
import { TableComponent } from '../common'
import { Icon } from "react-native-elements";
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Formik } from "formik";
import RNPicker from "rn-modal-picker";

const tableHead= ['Time', 'Quantity', 'Total kg','Edit']

class Sales extends PureComponent{
  
  constructor() {
    super();
    this.state = {
      selectedType:'',
      internalSH: '',
      externalSH: '',
      quantity: '',
      totalWeight:'',
      price:'',
      id: '',
      salesForm: {selectedType:'',internalSH:'',externalSH:'',quantity:'',totalWeight:'',price:''},
      modal: false,  
    };
  }

  _selectedValue(id, index ,data) {
    salesForm = this.state.salesForm

    if(id === "salestype" || id === "internalsh"){
        this.props.value[id] = data.name
        this.props.onChange(this.props.name, this.props.value);
        if(id === "internalsh")
          this.setState({salesForm: {...salesForm, internalSH:data.name}})
        else
          this.setState({salesForm: {...salesForm, selectedType:data.name}})
    }
    else{
      this.props.value[id] = data
      this.props.onChange(this.props.name, this.props.value);
      if(id === "quantity")
      	  this.setState({salesForm: {...salesForm, quantity:data}})
     else if(id === "totalweight")
          this.setState({salesForm: {...salesForm, totalWeight:data}})
      else if(id === "price")
          this.setState({salesForm: {...salesForm, price:data}})
    }

  }

  componentWillReceiveProps(nextProps) {
  if(nextProps.save)
    this.setState({ salesForm: {selectedType:'',internalSH:'',externalSH:'',quantity:'',totalWeight:'',price:''}});
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
        		 this.setState({ selectedType: rowData['data'][5], quantity: rowData['data'][1], id:key, totalWeight:rowData['data'][2], modal:true, price: rowData['data'][4], internalSH:rowData['data'][6], externalSH:rowData['data'][7]  }) 
        }
  		});
	}

  saveRow = (values) =>{
     this.props.tableData.map((rowData,index) => {
          if(parseInt(this.state.id) == rowData['id']){
            rowData['data'][5] = this.state.selectedType
            rowData['data'][1] = values["quantity"]
            rowData['data'][2] = values["totalweight"] 
            rowData['data'][4] = values["price"]
            rowData['data'][6] = this.state.internalSH
            this.setState({modal: false})    
          }
    });
    this.props.updateTableData(this.props.tableData)
  }

_editselectedValue(id, index, data) {
    if(id === "selectedType")
      this.setState({selectedType: data.name})
    else if(id === "internalSH")
       this.setState({internalSH: data.name})

  }

  render(){
		return(
			<Form>
				<Dialog visible={this.state.modal}>
	            <DialogContent style={appStyles.popupStyle}>
	              < Formik initialValues = {{"quantity" : this.state.quantity , "internalsh" : this.state.internalSH , "selectedType" : this.state.selectedType, "totalweight" : this.state.totalWeight, "price": this.state.price  }}  onSubmit={this.saveRow} >
	                { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
	                  <>
	                   <Text>{'\n'}</Text>
	                    <Text>Quantity :  </Text>
	                 	<TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter Quantity" name="Quantity" value={values.quantity} onChangeText={ text => setFieldValue("quantity", text)} ></TextInput>
	                 	<Text> { touched.Quantity && errors.Quantity } </Text>
	                 

	                 	<Text>Price/KG :  </Text>
	                 	<TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="" name="Price" value={values.price} onChangeText={ text => setFieldValue("price", text)} ></TextInput>
	                 	<Text> { touched.Quantity && errors.Quantity } </Text>
	                 
	                    <Text>Total kg :  </Text>
	                 	<TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="" name="TotalWeight" value={values.totalweight} onChangeText={ text => setFieldValue("totalweight", text)} ></TextInput>
	                 	<Text> { touched.Quantity && errors.Quantity } </Text>

	                    <Text>Sales Type :  </Text>
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
	                   
	                  <Text>Transfer to / SlaughterHouse:  </Text>
	                    <RNPicker
	                      dataSource={this.props.slaughterHouses}
	                      dummyDataSource={this.props.slaughterHouses}
	                      defaultValue={false}
	                      showSearchBar={true}
	                      disablePicker={false}
	                      changeAnimation={"none"}
	                      searchBarPlaceHolder={"Search....."}
	                      showPickerTitle={true}
	                      selectedLabel={this.state.internalSH}
	                      placeHolderLabel={"Please select value"}
	                      defaultValue = {true}
	                      selectedValue = {(index, name) => {this._editselectedValue("internalSH",index,name)}}
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
	 				<Text style = { appStyles.textStyle} > Sales </Text>
				</FormItem>
				<FormItem>
            		<Input  value = {this.state.salesForm.quantity } placeholder = "Quantity" secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("quantity",0,text)}/>
				</FormItem>
				<FormItem>
            		<Input placeholder = "Price/KG" value = {this.state.salesForm.price }  secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("price",0,text)}/>
				</FormItem>
				<FormItem>
            		<Input placeholder = "Total KG" value = {this.state.salesForm.totalWeight }  secureTextEntry = {false} numberOfLines = {1} keyboardType = "numeric" onChangeText={(text) => this._selectedValue("totalweight",0,text)}/>
				</FormItem>
				<FormItem>
            		<Select placeholder = "Type" data = { this.props.types } selectedData = {this.state.salesForm.selectedType} onPress = {this._selectedValue.bind(this,"salestype")} />
				</FormItem>
				<FormItem>
            		<Select placeholder = "Transfer to/Slaughterhouse" data = { this.props.slaughterHouses } selectedData = {this.state.salesForm.internalSH} onPress = {this._selectedValue.bind(this,"internalsh")} />
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
        types: state.Sales.types,
        slaughterHouses: state.Sales.slaughterHouses,
        tableData: state.Sales.tableData,
        save: state.Sales.save,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTableData: (Data) => dispatch({
        type: 'updateSalesTableData',
        data: Data,
      }),
   };
};

export default connect(mapStateToProps,mapDispatchToProps) (Sales); 
