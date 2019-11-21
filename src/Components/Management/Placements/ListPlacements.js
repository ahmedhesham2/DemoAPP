import React, { PureComponent } from 'react';
import { StyleSheet , FlatList , Text , View , TextInput , TouchableOpacity , ActivityIndicator , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionSheet from 'react-native-actionsheet';
import { change_Management_selected_Farm } from "../../../Actions";
import RNPickerSelect from 'react-native-picker-select';
import { connect } from "react-redux";

const BUTTONS = ["Edit","Delete","Cancel"];
var FarmItem ;
var _this ;

class ListPlacements extends PureComponent {

  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.inputRefs = {};
    _this = this ;
  }

  showOptions(FarmOption) {
        FarmItem = FarmOption;
        this.ActionSheet.show();
  }

  renderItem({ item, index }) {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => this.showOptions(item)}>
                    <View style={styles.row}>
                        <Text style={styles.description}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <ActionSheet
                    ref={o => (this.ActionSheet = o)}
                    options={BUTTONS}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={ (index) => {
                      //Clicking on the option will give you the index of the option clicked
                      if (index === 0) {
//                          Actions.EditFarm({Edited_Farm: FarmItem, title:"Edit Farm"})
                      }
                      else if (index === 1) {
//                          _this.props.Delete_Management_Farm(FarmItem.id)
                      }

                    }}
                />

            </View>
        )
    }

  render() {
    return (
         <View style={{flex: 1, backgroundColor: '#eaeaea'}}>

            <View style={styles.buttonContainer}>
                <RNPickerSelect
                            placeholder={{
                                label: 'Choose Farm...',
                                value: null,
                            }}

                            name = "Farm"
                            items={DropDown_list}
                            onValueChange={(value) => {
                                  new_farm = value !==null ? this.props.ManagementFarms.filter((val) => val.id == value )[0] : null
                                  this.props.change_Management_selected_Farm(new_farm)
                            }}

                            style={{ ...pickerSelectStyles }}
                            value = {this.props.Selected_Management_Farm !== null ? this.props.Selected_Management_Farm.id : null }


                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                />
            </View>



            <FlatList data={this.props.Management_Placements}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />

            <TouchableHighlight style={styles.addButton} underlayColor='#ff7043' onPress={()=>console.log("placementssssssss action")}>
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>

         </View>
    );
  }
}

var styles = StyleSheet.create({

    row: {
        backgroundColor: "#fff",
        padding: 8 * 2,
        marginBottom: 1
    },
    buttonContainer: {
        margin: 25
    },
    addButton: {
        backgroundColor: '#0d4d9a',
        borderColor: '#0d4d9a',
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
    }
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
        DropDown_list = []
        var Management_Placements = []

        for (farm in state.ManagementFarms){
            DropDown_list.push({ value : state.ManagementFarms[farm]["id"] , label : state.ManagementFarms[farm]["name"] })
        }

        selected_list = state.Selected_Management_Farm !== null ? state.ManagementFarms.filter((val) => val.id === state.Selected_Management_Farm.id ) : []
        selected_list = selected_list.length > 0 ? selected_list[0] : []
        for ( house in selected_list["Houses"] ){
            Management_Placements.push({ id : selected_list["Houses"][house]["placement"]["id"] , name : selected_list["Houses"][house]["name"] + " - " + selected_list["Houses"][house]["placement"]["Date"]  })
        }

        return { DropDown_list : DropDown_list , Management_Placements : Management_Placements , Selected_Management_Farm : state.Selected_Management_Farm , ManagementFarms : state.ManagementFarms };
}

export default connect(mapStateToProps,{change_Management_selected_Farm})(ListPlacements) ;