import React , { PureComponent } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { ScrollView , View , Button , TextInput , StyleSheet , Text } from "react-native";
import { connect } from "react-redux";
import { First_Form_submitted } from "../../../Actions";
import RNPickerSelect from 'react-native-picker-select';

class WizardFirstPage extends PureComponent {

    constructor(props) {
        super(props);
        this.inputRefs = {};
    }

    handle_first_form_submit = async (values) => {
        await (this.props.First_Form_submitted({ FarmName : values.FarmName , Governorate : values.Governorate }));
        this.props.on_next();
    }

    render(){

      const validationSchema = yup.object().shape({
        FarmName : yup.string().required("You must Enter Farm Name")
      });

      const Governorates_list = []
      for ( i in this.props.Governorates_Data) {
            Governorates_list.push({ value : i , label : this.props.Governorates_Data[i]['region'] })
      }

      return (
        <ScrollView>
        < Formik initialValues = {{"FarmName" : this.props.WizardData.FarmName , "Governorate" : this.props.WizardData.Governorate }} validationSchema = { validationSchema } onSubmit={this.handle_first_form_submit} >
        {
          ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
          <>
          <Text>Farm Name : {'\n'} </Text>
          <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="ascii-capable" autoCapitalize="none" autoCorrect={false} placeholder="Enter your Farm Name" name="FarmName" value={values.FarmName} onChangeText={ text => setFieldValue("FarmName", text)} ></TextInput>
          <Text style={styles.errormsg}> { touched.FarmName && errors.FarmName } </Text>
          <Text>{'\n'}</Text>


          <Text>Choose your Governorate :  {'\n'} </Text>

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
                    selectedValue = {this.props.WizardData.Governorate}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
                <Text style={styles.errormsg}> { errors.Governorate } </Text>
                <Text>{'\n'}</Text>


          < Button title = "Next" onPress ={handleSubmit} />
          </>
        )}
        </Formik>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
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

const mapStateToProps = state => {
    return { Governorates_Data : state.Governorates , WizardData : state.WizardData  } ;
}

export default connect(mapStateToProps , {First_Form_submitted})(WizardFirstPage) ;
