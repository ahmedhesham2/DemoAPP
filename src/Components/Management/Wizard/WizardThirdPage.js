import React , { PureComponent } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { Button , TextInput , StyleSheet , Text , ScrollView } from "react-native";
import { connect } from "react-redux";
import { Third_Form_submitted , reset_wizard_Form } from "../../../Actions";
import RNPickerSelect from 'react-native-picker-select';

var Breeds_Items = [
  {
    value: "1",
    label: 'Cobb',
  },
  {
    value: "2",
    label: 'Hubbard',
  },
  {
    value: "3",
    label: 'Ross 308',
  },
  {
    value: "4",
    label: 'F15',
  },
  {
    value: "5",
    label: 'Avian',
  },
  {
    value: "6",
    label: 'Arbor Acres',
  }
];


class WizardThirdPage extends PureComponent {

  constructor(props) {
        super(props);
        this.inputRefs = {};
    }

  handle_third_form_submit = async (values) => {
      await(this.props.Third_Form_submitted({ FarmName : this.props.WizardData.FarmName , Governorate : this.props.WizardData.Governorate , HouseName : this.props.WizardData.HouseName , HouseArea : this.props.WizardData.HouseArea , HousesNumber : this.props.WizardData.HousesNumber , PlacementQuantity : values.PlacementQuantity , DoA : values.DoA , breed : values.breed }));
      await(this.props.reset_wizard_Form({ FarmName : "" , Governorate : "1" , HouseName : "" , HouseArea : "" , HousesNumber : "" , PlacementQuantity : "" , DoA : "" , breed : "1" }));
      this.props.on_next();
      this.props.navigation.navigate("FarmsManagement") ;
  }

  handle_previous_click = () => {
      this.props.on_previous();
  }

  render(){

    const validationSchema = yup.object().shape({
      PlacementQuantity : yup.number().required("You must Enter Placement Quantity").positive("Placement Quantity must be more than 0").integer(),
      DoA : yup.number().required("You must Enter DOA").positive("DOA must be more than 0").integer(),

    });

    return (
      <ScrollView>
      < Formik initialValues = {{"PlacementQuantity" : this.props.WizardData.PlacementQuantity , "DoA" : this.props.WizardData.DoA , "breed" : this.props.WizardData.breed  }} validationSchema = {validationSchema} onSubmit={this.handle_third_form_submit} >
      { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
        <>
       <Text>Placement Quantity :  {'\n'} </Text>
       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter your Placement Quantity" name="PlacementQuantity" value={values.PlacementQuantity} onChangeText={ text => setFieldValue("PlacementQuantity", text)} ></TextInput>
       <Text style={styles.errormsg}> { touched.PlacementQuantity && errors.PlacementQuantity } </Text>
       <Text>{'\n'}</Text>

       <Text>DOA :  {'\n'} </Text>
       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter your DOA" name="DoA" value={values.DoA} onChangeText={ text => setFieldValue("DoA", text)} ></TextInput>
       <Text style={styles.errormsg}> { touched.PlacementQuantity && errors.DoA } </Text>
       <Text>{'\n'}</Text>

       <Text>Choose Breed :  {'\n'} </Text>

                <RNPickerSelect
                    placeholder={{
                        label: 'Choose Your Breed...',
                        value: null,
                    }}

                    name = "breed"
                    items={Breeds_Items}
                    onValueChange={(value) => {
                        setFieldValue("breed", value)
                    }}

                    style={{ ...pickerSelectStyles }}
                    value={values.breed}
                    selectedValue = {this.props.WizardData.breed}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

       <Text style={styles.errormsg}> {errors.breed } </Text>
       <Text>{'\n'}</Text>

     < Button title = "Previous" onPress = {this.handle_previous_click}  />
     < Button title = "Finish" onPress ={handleSubmit} />
       </>
      )}
      </Formik>
      </ScrollView>
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

const styles = StyleSheet.create({
    errormsg : {
      color : 'red',
    },
});

const mapStateToProps = state => {
    return { WizardData : state.WizardData } ;
}

export default connect(mapStateToProps,{Third_Form_submitted , reset_wizard_Form })(WizardThirdPage) ;
