import React , { Component } from 'react';
import { Text, Picker, View, StyleSheet } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import RNPicker from "rn-modal-picker";
import { Dimensions } from 'react-native';

class Select extends Component{

   render(){
   
    return (
    <View style= {styles.inputContainer}>
      <Text style= {styles.label}> {this.props.label} </Text>
      <RNPicker
          dataSource={this.props.data}
          dummyDataSource={this.props.data}
          defaultValue={this.props.defaultValue}
          pickerTitle={this.props.pickerTitle}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          showPickerTitle={true}
          searchBarContainerStyle={styles.searchBarContainerStyle}
          pickerStyle={styles.pickerStyle}
          selectedLabel={this.props.selectedData}
          placeHolderLabel={this.props.placeholder}
          selectedValue={(index, name) => {this.props.onPress(index, name)}}
      />
    </View>
  );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'flex-start',
    height: 60
  },
  label: {
    opacity: 0.8,
    letterSpacing: 1,
    fontSize: 14,
    paddingLeft: 1,
    marginLeft:10
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    color: 'rgb(42,55,68)'
  },
  pickerStyle: {
    marginLeft: 20,
    elevation:3,
    paddingRight: 25,
    marginRight: 60,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:0.2,
    shadowRadius: 5,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    borderColor: '#0d4d9a',
    width: (Dimensions.get("window").width)-100,
    // marginTop: 10,
    flexDirection: "row"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  }
});

export { Select }

