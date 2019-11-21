import React, {Component , PureComponent} from 'react';
import { StyleSheet, View ,Button, PixelRatio , Platform , Dimensions , Text, LayoutAnimation , Keyboard , TextInput , TouchableOpacity , TouchableHighlight } from 'react-native';
import {addFeedType, updateFeedType} from '../../Actions'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { Ionicons } from 'react-native-vector-icons';
var TEXT_SIZE = (PixelRatio.get() <= 2) ? 17 : 19;
var NAVBAR_HEIGHT = (Platform.OS === 'ios') ? 64 : 54;
var {width: windowWidth, height: windowHeight} = Dimensions.get('window');
var HEIGHT = windowHeight - NAVBAR_HEIGHT;


class NewFeedType extends PureComponent {

    constructor(props) {
      
        super(props);
        this.state = { feedtype: (props.edit) ? props.feedtype.feedtype : "" };
    }
    
    addFeedType() {
        if (this.props.edit){
            var feedtype = this.props.feedtype;
            feedtype['feedtype'] = this.state.feedtype;
            this.props.updateFeedType(feedtype);
        } else{
            var feedtype = {"id": this.generateID(), "feedtype": this.state.feedtype};
            this.props.addFeedType(feedtype);
        }
        Actions.pop();
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

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
                    <TextInput
                        
                        onChangeText={(text) => this.setState({feedtype: text})}
                        placeholder={"Enter FeedType"}
                        style={[styles.title]}
                        value={this.state.feedtype}
                    />
                </View>

                {/* <TouchableOpacity style={[styles.saveBtn]} disabled={( this.state.feedtype.length > 0) ? false : true} onPress={this.addFeedType.bind(this)}>
                    <Text style={[styles.navText,{fontWeight: "500",color: (this.state.feedtype.length > 0) ? "#FFF" : "rgba(255,255,255,.5)"}]}>Save</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    saveBtn:{

        // width: windowWidth/10,
        
        // height: 38,
        // top: 14,
        // right: 8,
        // position: "absolute",
        // borderRadius: 50/2,
        // justifyContent: "center",
        // alignItems: 'center',
        // backgroundColor:"#6B9EFA"

        width: windowWidth/6,
        height: 44,
        // position: 'absolute',
        marginTop: -(windowHeight/2),
        marginLeft: 10,
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
        height:60,
        top: 10,
        backgroundColor: "#fff",
        padding: 16,
        paddingLeft:5
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

export default connect(null, {addFeedType, updateFeedType})(NewFeedType);
