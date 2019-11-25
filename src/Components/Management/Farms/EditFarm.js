import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView , SafeAreaView } from 'react-native';
import { Button , Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from "formik";
import * as yup from "yup";
import { Update_Management_Farm } from "../../../Actions";
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";

var selected_ID;
class EditFarm extends PureComponent {

  constructor(props) {
        super(props);
        selected_ID = props.Edited_Farm.id;
        this.inputRefs = {};
  }

  handle_update_farm_form_submit = async (values , actions) => {
        await this.props.Update_Management_Farm({ id : String(selected_ID) , FarmName : values.FarmName , Governorate : values.Governorate , HousesNumber : values.HousesNumber })
        Actions.ListFarms();
  }

  render() {

    const validationSchema = yup.object().shape({
        FarmName : yup.string().required("You must Enter Farm Name"),
        HousesNumber : yup.number().required("You must Enter Houses Number").positive("Houses Number must be more than 0").integer(),
    });

      var Governorates_list = []
      for ( i in this.props.Governorates) {
            Governorates_list.push({ value : i , label : this.props.Governorates[i]['region'] })
    }

    return (
      <ScrollView style={styles.container}>
      < Formik initialValues = {{"FarmName" : this.props.selected_Farm.name , "Governorate" : this.props.selected_Farm.location , "HousesNumber" : this.props.selected_Farm.Num_of_Houses }} validationSchema = { validationSchema } onSubmit={this.handle_update_farm_form_submit} >
        {

        ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
        <>
        <View style={styles.inputContainer}>

            <Input
              
              leftIconContainerStyle={styles.iconStyle}
              placeholderTextColor="grey"
              keyboardType="ascii-capable"
              autoCapitalize="none"
              autoCorrect={false}
              name="FarmName"
              value={values.FarmName}
              onChangeText={ text => setFieldValue("FarmName", text)}
              placeholder="Enter Farm Name"
            />
            <Text style={styles.errormsg}> { touched.FarmName && errors.FarmName } </Text>
        </View>

        <View style={styles.inputContainer}>
            <Input
              leftIconContainerStyle={styles.iconStyle}
              placeholderTextColor="grey"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              name="HousesNumber"
              value={values.HousesNumber}
              onChangeText={ text => setFieldValue("HousesNumber", text)}
              placeholder="Enter Houses Number"
              editable={false}
            />
            <Text style={styles.errormsg}> { touched.HousesNumber && errors.HousesNumber }</Text>
        </View>

        <View style={styles.buttonContainer}>
            <RNPickerSelect
                        placeholder={{
                            label: 'Choose Your Governorate...',
                            value: null,
                        }}

                        name = "Governorate"
                        items={Governorates_list}
                        onValueChange={(value) => {
                              setFieldValue("Governorate", value)
                        }}

                        style={{ ...pickerSelectStyles }}
                        value={values.Governorate}
                        selectedValue = {this.props.selected_Farm.location}
                        ref={(el) => {
                            this.inputRefs.picker = el;
                        }}
            />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            type="outline"
            onPress ={handleSubmit}
            title="Save"
            buttonStyle={{ borderColor: "#039BE5", borderRadius: 20 }}
            titleStyle={{ color: "#039BE5" }}
          />
        </View>

        </>

        )}
        </Formik>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  },
  inputContainer: {
    margin: 15
  },
  iconStyle: {
    marginRight: 10
  },
  errormsg : {
      color : 'red',
    },
});

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

const mapStateToProps = (state , ownProps) => {
      var selected_Farm = state.ManagementFarms.filter( FarmObj=> FarmObj.id === ownProps.Edited_Farm.id);
       selected_Farm = selected_Farm.length > 0 ? selected_Farm : [{
         id:"",
         name:"",
         Num_of_Houses:"",
         location :"",
      }]
      return { Governorates : state.Governorates , selected_Farm : selected_Farm[0] };
}
export default connect(mapStateToProps,{Update_Management_Farm})(EditFarm) ;