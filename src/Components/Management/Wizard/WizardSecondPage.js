import React , { PureComponent } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { ScrollView , View , Button , TextInput , StyleSheet , Text } from "react-native";
import { connect } from "react-redux";
import { Second_Form_submitted } from "../../../Actions";


class WizardSecondPage extends PureComponent {

  handle_second_form_submit = async (values) => {
      await (this.props.Second_Form_submitted({ HouseName : values.HouseName , HouseArea : values.HouseArea , HousesNumber : values.HousesNumber })) ;
      this.props.on_next();
  }

  handle_previous_click = () => {
    this.props.on_previous();
  }

  render(){

    const validationSchema = yup.object().shape({
      HouseName : yup.string().required("You must Enter House Name") ,
      HouseArea : yup.number().required("You must Enter House Area").positive("House Area must be more than 0").integer(),
      HousesNumber : yup.number().required("You must Enter Houses Number").positive("Houses Number must be more than 0").integer(),
    });

    return (
      <ScrollView>
      < Formik initialValues = {{"HouseName" : this.props.WizardData.FarmName , "HouseArea" : this.props.WizardData.HouseArea , "HousesNumber" : this.props.WizardData.HousesNumber}} validationSchema = {validationSchema} onSubmit={this.handle_second_form_submit} >
      { ({ handleChange , handleSubmit , errors , values , setFieldValue , touched }) => (
        <>
       <Text>House Name : {'\n'} </Text>
       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="ascii-capable" autoCapitalize="none" autoCorrect={false} placeholder="Enter your House Name" name="HouseName" value={values.HouseName} onChangeText={ text => setFieldValue("HouseName", text)} ></TextInput>
       <Text style={styles.errormsg}> { touched.HouseName && errors.HouseName }</Text>
       <Text>{'\n'}</Text>

       <Text>House Area : {'\n'} </Text>
       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter your House Area" name="HouseArea" value={values.HouseArea} onChangeText={ text => setFieldValue("HouseArea", text)} ></TextInput>
       <Text style={styles.errormsg}> { touched.HouseArea && errors.HouseArea }</Text>
       <Text>{'\n'}</Text>

       <Text>Number Of Houses :{'\n'} </Text>
       <TextInput style={{ padding: 10, width: 200 , borderColor: 'black', borderWidth: 1 , marginBottom : 3 }} keyboardType="numeric" autoCapitalize="none" autoCorrect={false} placeholder="Enter your Houses Number" name="HousesNumber" value={values.HousesNumber} onChangeText={ text => setFieldValue("HousesNumber", text)} ></TextInput>
       <Text style={styles.errormsg}> { touched.HousesNumber && errors.HousesNumber }</Text>
       <Text>{'\n'}</Text>

       < Button title = "Previous" onPress = {this.handle_previous_click}  />
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

const mapStateToProps = state => {
    return { WizardData : state.WizardData } ;
}

export default connect(mapStateToProps,{Second_Form_submitted})(WizardSecondPage) ;
