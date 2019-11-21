import React, {Component , PureComponent} from 'react';
import { StyleSheet, View , PixelRatio , Platform , Dimensions , Text, LayoutAnimation , Keyboard , TextInput , TouchableOpacity , TouchableHighlight } from 'react-native';
import {addFeedType, updateFeedType} from '../../Actions'
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


class NewFeedDelivery extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { feedtype:  "" , batchNum: "", quantity: "", shortageExtra: "" , feedTypes: []};
    }
    
    componentWillMount(){
        
       var feedTypeList = [{value:0, label: "All"}] 
       feedTypesData = this.props.getFeedTypes();
       
       for ( i in feedTypesData.feedtypes) {
            feedTypeList.push({ value : feedTypesData.feedtypes[i]['id'] , label : feedTypesData.feedtypes[i]['feedtype'] })
        }
     if(this.props.edit){

        this.setState({feedTypes: feedTypeList, feedtype: this.props.feedObj["fk_feedtype"] , batchNum: this.props.feedObj["batch_num"], quantity: (this.props.feedObj["quantity"]).toString(), shortageExtra: (this.props.feedObj["shortage_extra"]).toString() })
     }
     else
        this.setState({ feedTypes: feedTypeList })
    
        this.props.navigation.setParams({
            right: <Ionicons  name="md-checkmark" size={23}  color="white"  onPress={() => this.addFeedDelivery()} />
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

    addFeedDelivery() {
        if (this.props.edit){
            var editedFeedDelivery = this.props.feedObj;
            editedFeedDelivery['fk_feedtype'] = this.state.feedtype;
            editedFeedDelivery['batch_num'] = this.state.batchNum;
            editedFeedDelivery['shortage_extra'] = this.state.shortageExtra;
            editedFeedDelivery['quantity'] = this.state.quantity;
            editedFeedDelivery['name'] = this.state.feedTypes[this.state.feedtype]["label"]+" - "+this.state.batchNum;
            editedFeedDelivery['feedType'] = this.state.feedTypes[this.state.feedtype]["label"]

            this.props.updateFeedDelivery(editedFeedDelivery);
        } else{
            var feedDelivery = {"id": this.generateID(),"the_date":"2019-11-05","fk_farm":67,"quantity":this.state.quantity,"consumed":0,"batch_num":this.state.batchNum,"shortage_extra":this.state.shortageExtra,"fk_feedtype": this.state.feedtype, "name":this.state.feedTypes[this.state.feedtype]["label"]+" - "+this.state.batchNum,"feedType": this.state.feedTypes[this.state.feedtype]["label"], "synced":false};
            this.props.addFeedDelivery(feedDelivery);
        }
        Actions.pop();
    }
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Choose Feed Type',
                            value: null,
                        }}

                        name = "feedType"
                        items={this.state.feedTypes}
                        style={{ ...pickerSelectStyles }}
                        onValueChange={(value) => {
                              this.setState({feedtype:value})
                        }}

                        value={this.state.feedtype}
                        
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
                        placeholder={"Enter Shortage or Extra"}
                        value = {this.state.shortageExtra}
                        onChangeText={(text) => this.setState({shortageExtra: text})}
                        keyboardType = {"numeric"}
                        style={[styles.title]}
                    />
                </View>
                
               
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

export default connect(null, mapDispatchToProps)(NewFeedDelivery);


