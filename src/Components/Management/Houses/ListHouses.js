import React, { PureComponent } from 'react';
import { StyleSheet , FlatList , Text , View , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionSheet from 'react-native-actionsheet';
import { connect } from "react-redux";

const BUTTONS = ["Edit","Delete","Cancel"];
var FarmItem ;
var _this ;

class ListHouses extends PureComponent {

  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
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
            <FlatList data={this.props.Management_Houses}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />

            <TouchableHighlight style={styles.addButton} underlayColor='#ff7043' onPress={()=>console.log("housessssss action")}>
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

const mapStateToProps = state => {
        var Management_Houses = []
        for (farm in state.ManagementFarms){
            for(house in state.ManagementFarms[farm]["Houses"]){
                Management_Houses.push({id : state.ManagementFarms[farm]["Houses"][house]["id"] , name : state.ManagementFarms[farm]["name"] + " - " + state.ManagementFarms[farm]["Houses"][house]["name"] })
            }
        }
        return { Management_Houses : Management_Houses };
}

export default connect(mapStateToProps,{})(ListHouses) ;