import React, {Component , PureComponent} from 'react';
import { StyleSheet, View , PixelRatio , Platform , Dimensions , Text, LayoutAnimation , Keyboard , TextInput , TouchableOpacity , TouchableHighlight } from 'react-native';
import {addEnergyDelivery, updateEnergyDelivery} from '../../Actions'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import {bindActionCreators} from 'redux';
import * as ReduxActions from '../../Actions';

import { Ionicons } from 'react-native-vector-icons';
var TEXT_SIZE = (PixelRatio.get() <= 2) ? 17 : 19;
var NAVBAR_HEIGHT = (Platform.OS === 'ios') ? 64 : 54;
var {width: windowWidth, height: windowHeight} = Dimensions.get('window');
var HEIGHT = windowHeight - NAVBAR_HEIGHT;


class NewEnergyDelivery extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { energytype:  "" , batchNum: "", quantity: "", batchCost: "" , energyTypes: []};
    }
    
    componentWillMount(){
        
       var energyTypeList = [] 
       energyTypesData = this.props.getEnergyTypes();
       
       for ( i in energyTypesData.energytypes) {
            energyTypeList.push({ value : energyTypesData.energytypes[i]['id'] , label : energyTypesData.energytypes[i]['energytype'] })
        }
     if(this.props.edit){
        this.setState({energyTypes: energyTypeList, energytype: this.props.energyObj["fk_energy_type"] , batchNum: this.props.energyObj["batch_num"], quantity: (this.props.energyObj["quantity"]).toString(), batchCost: (this.props.energyObj["cost"]).toString() })
     }
     else
        this.setState({ energyTypes: energyTypeList })

        this.props.navigation.setParams({
             right: <Ionicons  name="md-checkmark" size={23}  color="white"  onPress={() => this.addEnergyDelivery()} />
        });

    }
   generateID() {
        var d = new Date().getTime();
        var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(5);
        });
        return id;
    }

    addEnergyDelivery() {
        if (this.props.edit){
            var editedEnergyDelivery = this.props.energyObj;
            editedEnergyDelivery['fk_energy_type'] = this.state.energytype;
            editedEnergyDelivery['batch_num'] = this.state.batchNum;
            editedEnergyDelivery['cost'] = this.state.batchCost;
            editedEnergyDelivery['quantity'] = this.state.quantity;
            editedEnergyDelivery['name'] = this.state.energyTypes[parseInt(this.state.energytype)-1]["label"]+" - "+this.state.batchNum;
            editedEnergyDelivery['energyType'] = this.state.energyTypes[parseInt(this.state.energytype)-1]["label"]

            this.props.updateEnergyDelivery(editedEnergyDelivery);
        } else{
            var energyDelivery = {"id": this.generateID(),"the_date":"2019-11-05","fk_farm":67,"quantity":this.state.quantity,"consumed":0,"batch_num":this.state.batchNum,"cost":this.state.batchCost,"fk_energy_type": this.state.energytype, "name":this.state.energyTypes[parseInt(this.state.energytype)-1]["label"]+" - "+this.state.batchNum,"energyType": this.state.energyTypes[parseInt(this.state.energytype)-1]["label"], "synced":false};
            this.props.addEnergyDelivery(energyDelivery);
        }
        Actions.pop();
    }
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Choose Energy Type',
                            value: null,
                        }}

                        name = "energyType"
                        items={this.state.energyTypes}
                        style={{ ...pickerSelectStyles }}
                        onValueChange={(value) => {
                              this.setState({energytype:value})
                        }}

                        value={this.state.energytype}
                        
                    />
                    <TextInput
                        multiline={true}
                        placeholder={"Enter Batch Num"}
                        value = {this.state.batchNum}
                        onChangeText={(text) => this.setState({batchNum: text})}
                        style={[styles.title]}
                    />
                    <TextInput
                        multiline={true}
                        placeholder={"Enter Quantity"}
                        value = {this.state.quantity}
                        onChangeText={(text) => this.setState({quantity: text})}
                        keyboardType = {"numeric"}
                        style={[styles.title]}
                    />
                    <TextInput
                        multiline={true}
                        placeholder={"Enter Batch Cost"}
                        value = {this.state.batchCost}
                        onChangeText={(text) => this.setState({batchCost: text})}
                        keyboardType = {"numeric"}
                        style={[styles.title]}
                    />
                </View>
                {/*<TouchableOpacity style={[styles.saveBtn]}  onPress={this.addEnergyDelivery.bind(this)}>
                    <Text style={[styles.navText,{fontWeight: "500",color: (this.state.energytype.length > 0) ? "#FFF" : "rgba(255,255,255,.5)"}]}>Save</Text>
                    </TouchableOpacity>*/}
               
            </View>
        );
    }
}

var styles = StyleSheet.create({
    saveBtn:{
        width: windowWidth,
        height: 44,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"#6B9EFA"
    },
    quote: {
        fontSize: TEXT_SIZE,
        lineHeight: 38,
        // fontFamily: 'Helvetica',
        color: "#333333",
        padding: 16,
        paddingLeft:0,
        flex:1,
        height: 200,
        marginBottom:50,
        borderTopWidth: 1,
        borderColor: "rgba(212,211,211, 0.3)",
    },
    feedtype: {
        fontSize: TEXT_SIZE,
        lineHeight: 38,
        // fontFamily: 'Helvetica',
        color: "#333333",
        padding: 16,
        paddingLeft:0,
        flex:1,
        height: 200,
        marginBottom:50,
        borderTopWidth: 1,
        borderColor: "rgba(212,211,211, 0.3)",
    },
    title: {
        fontWeight: "400",
        lineHeight: 22,
        fontSize: 16,
        // fontFamily: 'Helvetica',
        height:25+32,
        padding: 16,
        paddingLeft:0
    },
    saveButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
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


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(null, mapDispatchToProps)(NewEnergyDelivery);


