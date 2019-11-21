import React, { PureComponent } from "react"
import {Temperature, Humidity,CarbonDioxide ,Weight} from "./"
import {Form , FormItem, Select} from '../common'
import Culls from './Culls'
import Mortality from './Mortality'
import EnergySource from './EnergySource'
import Medication from './Medication'
import Sales from "./Sales"
import Unaccountables from "./Unaccountables"
import Intake from "./Intake"
import Comments from "./Comments"
import {View,ScrollView, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text,TouchableHighlight } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik,ErrorMessage } from 'formik';
import { Button } from 'react-native-elements';
import { connect } from "react-redux";
import { DataStore } from '../../Store/Store';
import { Header } from "react-native-elements";
import IconComponent from "../Icons/Icon";
import { Ionicons } from "react-native-vector-icons";
import styles from '../Dark.style';
import { withNavigation } from "react-navigation";
import MenuButton from '../Menu/MenuButton';

class DailyData extends React.Component {
  
  constructor() {
    super();
    this.state = {
     culls: {quantity:'', culls_weight:'', culls_type:'',theTime:'',theDate:''} ,
     mortality: {theTime:'',theDate:'',quantity:'', mortality_weight:'',catching:"1"},
     humidity: {humidityMin: '', humidityMax: ''},
     carbondioxide: {minCO2: '', maxCO2: '',avgCO2:''},
     temperature: {tempMin: '', tempMax: '', outsideTempMin: '', outsideTempMax: ''},
     energy: {energyTypeID: '', energyDeliveryID: '', quantity: '',theTime:'',theDate:''},
     medication: {theTime:'', theDate:'', application_route: '',medication_consumption:'',medicationNameID:'',number_of_birds:'',medicationDeliveryID:''},
     sales: {theTime: '', theDate:'', internalsh:'', externalsh:'', salestype:'',totalweight:'',quantity:'',price:''},
     unaccountables: {theTime: '', theDate:'', justification:'', quantity:''},
     intake: {feedIntake:'', feedType:'', feedBatch:'', waterIntake:'', waterPH:'', waterORP:'', feedIntake2:'', feedType2:'',feedBatch2:''}, 
     weight: '',
     comments: {theDate:'',theTime:'',comment:'',addedBy:'',timestamp:'',synced:'',replies:{},id:'',photoUrl:'',timestamp:''},
     save:false 
    };
  }

  static navigationOptions = ({ navigation }) => {
      
      const logoutBtnStyle = {flex:1, paddingRight: 30, height: 30, marginHorizontal: 25, alignItems: 'center',
      marginVertical: 10, borderRadius:5,backgroundColor: 'rgb(42,55,68)',justifyContent: 'center' };
      const saveBtnStyle = {flex:1, paddingRight: 10, height: 30, marginHorizontal: 25, alignItems: 'center',
      marginVertical: 10, borderRadius:5,backgroundColor: 'rgb(42,55,68)',justifyContent: 'center' };
      const { params = {} } = navigation.state;
      const headerRight = (
      	<View style={{flexDirection: 'row'}}>
	      	<TouchableOpacity style={logoutBtnStyle} onPress = {params.logout}>
	          <Text style={{ paddingLeft:20, color: '#fff',fontSize: 15 }}>Logout</Text>
	        </TouchableOpacity> 
         
        </View>
      );
      const headerLeft = null;
      // headerTitleStyle=  { color: 'green', paddingLeft: 80}
      // const headerStyle =  { backgroundColor: 'red' }
      return { headerRight, headerLeft };
    };

    // componentDidUpdate() {
    //     if (this.state.update == 1) {
    //         this.props.UpdateHouse(this.state);
    //         this.setState({ update: 0 });
    //     }
    // }

 	_logout(){
      this.props.onLogout()
      this.props.navigation.navigate("Login")
  	}

  _saveHouseComponents(){
    console.log("Save Components")
  }

	// componentDidMount(){
    //console.log("DailyDataaaa")
	   // this.props.navigation.setParams({ logout: this._logout.bind(this), saveDailyData: this._saveHouseComponents.bind(this) });
	  // }
 
  componentWillMount(){
     newHumidity = {humidityMin: DataStore.getState().DailyData.humidity.humidityMin , humidityMax: DataStore.getState().DailyData.humidity.humidityMax }
     newTemperature =  {tempMin: DataStore.getState().DailyData.temperature.tempMin , tempMax: DataStore.getState().DailyData.temperature.tempMax , outsideTempMin: DataStore.getState().DailyData.temperature.outsideTempMin , outsideTempMax: DataStore.getState().DailyData.temperature.outsideTempMax }
     newIntake = {feedIntake: DataStore.getState().DailyData.intake.feedIntake , feedType:DataStore.getState().DailyData.intake.feedType , feedBatch: DataStore.getState().DailyData.intake.feedBatch , waterIntake:DataStore.getState().DailyData.intake.waterIntake , waterPH:DataStore.getState().DailyData.intake.waterPH , waterORP: DataStore.getState().DailyData.intake.waterORP, feedIntake2: DataStore.getState().DailyData.intake.feedIntake2, feedType2: DataStore.getState().DailyData.intake.feedType2 ,feedBatch2: DataStore.getState().DailyData.intake.feedBatch2 },
     newCarbondioxide = {minCO2 : DataStore.getState().DailyData.carbondioxide.minCO2 , maxCO2 : DataStore.getState().DailyData.carbondioxide.maxCO2 , avgCO2 : DataStore.getState().DailyData.carbondioxide.avgCO2}
     this.setState({ humidity: newHumidity, temperature: newTemperature, carbondioxide:newCarbondioxide ,intake: newIntake, weight: DataStore.getState().DailyData.weight })
  }

   getCurrentTime(){
      hours = new Date().getHours(); //Current Hours
      min = new Date().getMinutes(); //Current Minutes
      sec = new Date().getSeconds(); //Current Seconds
      return (hours + ':' + min + ':' + sec)
   }

  
	_handleSubmit =  (values, actions) => {
      values["culls"]["theTime"] = this.getCurrentTime()
      values["mortality"]["theTime"] = this.getCurrentTime()
      values["energy"]["theTime"] = this.getCurrentTime()
      values["medication"]["theTime"] = this.getCurrentTime()
      values["sales"]["theTime"] = this.getCurrentTime()
      values["unaccountables"]["theTime"] = this.getCurrentTime()
      values["comments"]["theDate"] = new Date(); 
	    this.props.updateHouseData(values)
      this.setState({culls: this.props.culls, mortality: this.props.mortality, humidity: this.props.humidity , temperature: this.props.temperature, energy: this.props.energy, medication: this.props.medication, sales: this.props.sales, unaccountables:this.props.unaccountables, intake:this.props.intake,weight: this.props.weight, carbondioxide:this.props.carbondioxide ,comments:this.props.comments, save:true})
      //actions.resetForm({culls: this.props.culls , mortality: this.props.mortality, humidity: this.props.humidity, temperature: this.props.temperature});      
    }; 

    
 _validateHouseData(values){
    errors = {}
    // errors.culls = 'Required';
    return errors
  }
 
	render(){
   return(
    <View style={{backgroundColor: "#e6e9ed"}}>

        <Formik
          initialValues={{ culls: this.state.culls , mortality: this.state.mortality, carbondioxide: this.state.carbondioxide ,humidity: this.state.humidity, temperature:this.state.temperature, energy: this.state.energy, medication: this.state.medication, sales:this.state.sales ,unaccountables:this.state.unaccountables, intake:this.state.intake, weight:this.state.weight, comments: this.state.comments }}
          onSubmit={this._handleSubmit}
          validate ={this._validateHouseData}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting,
          }) => (
            <React.Fragment>
            <Header
              leftComponent={<MenuButton navigation={this.props.navigation} />}
              centerComponent={<Text style={styles.dailyDataHeader} >Daily Data</Text>}
              rightComponent={<Ionicons IconType="AwesomeIcon" name="md-checkmark" size={23} color="#dfe0e2" onPress={handleSubmit} />}
              containerStyle={styles.containerHeader}
              innerContainerStyles={{ justifyContent: 'space-around' }}
            />


              <KeyboardAwareScrollView>
              <Temperature
                  autoCapitalize="none"
                  value={values.temperature}
                  onChange={setFieldValue}
                  name="temperature"
                />
                 <Humidity
                  autoCapitalize="none"
                  value={values.humidity}
                  onChange={setFieldValue}
                  name="humidity"
                />
                 <Intake
                  autoCapitalize="none"
                  value={values.intake}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="intake"
                />
                  <Weight
                  autoCapitalize="none"
                  value={values.weight}
                  onChange={setFieldValue}
                  name="weight"
                />
                <Mortality 
                  autoCapitalize="none"
                  value={values.mortality}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mortality"
                />

                <Culls
                  autoCapitalize="none"
                  value={values.culls}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="culls"
                />

                <CarbonDioxide
                  autoCapitalize="none"
                  value={values.carbondioxide}
                  onChange={setFieldValue}
                  name="carbondioxide"
                />


                <EnergySource 
                  autoCapitalize="none"
                  value={values.energy}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="energy"
                />
                <Medication 
                  autoCapitalize="none"
                  value={values.medication}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="medication"
                />

                <Sales 
                  autoCapitalize="none"
                  value={values.sales}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sales"
                />
                {/* <Unaccountables
                  autoCapitalize="none"
                  value={values.unaccountables}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="unaccountables"
                /> */}
                {/* <Comments
                  autoCapitalize="none"
                  value={values.comments}
                  onChange={setFieldValue}
                  name="comments"
                /> */}

                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </KeyboardAwareScrollView>
            </React.Fragment>
          )}
        />
     </View>

    );
  }

}


const mapStateToProps = (state) => {
  
  return {
      culls : state.DailyData.culls,
      mortality: state.DailyData.mortality,
      humidity: state.DailyData.humidity,
      temperature: state.DailyData.temperature,
      carbondioxide: state.DailyData.carbondioxide,
      energy: state.DailyData.energy,
      medication: state.DailyData.medication,
      sales: state.DailyData.sales,
      unaccountables: state.DailyData.unaccountables,
      intake: state.DailyData.intake,
      weight: state.DailyData.weight,
      comments: state.DailyData.comments,
      save: state.DailyData.save
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
      updateHouseData: (Data) => dispatch({
        type: 'updateHouseData',
        Data: Data,
      }),
      onLogout: (Data) => dispatch({
        type: 'USER_LOGOUT',
      })
   };
};

export default withNavigation(connect(mapStateToProps,mapDispatchToProps)(DailyData));
