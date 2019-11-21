import React, { PureComponent } from 'react';
import { StyleSheet , FlatList , Text , View , TextInput , TouchableOpacity , ActivityIndicator , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import {bindActionCreators} from 'redux';
import * as ReduxActions from '../../Actions';
import { Actions } from 'react-native-router-flux';
import ActionSheet from 'react-native-actionsheet'; 
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';



var feed_obj;
var CANCEL_INDEX = 2;
var _this;

function Item({ id, title, obj }) {
  return (
    <View>
     <TouchableWithoutFeedback onPress={() => Actions.new_energyDelivery({energyObj: obj,  edit: true, energyTypes: _this.props.energyTypes })} >
        <View style={styles.row}>
            <Text style={styles.description}>
                {title}
            </Text>
        </View>
     </TouchableWithoutFeedback>
    </View>
  );
} 

class ListEnergyDeliveries extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { selectedEnergyType: 0 };
    }
    
    componentDidMount() {
        this.props.getEnergyDeliveries();
        _this = this;
    }



      onChange(value){
        deliveries = {}
        this.props.filterEnergyDeliveries(value)
        this.setState({selectedEnergyType:value})
      }
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={[{height: 80}]}
                        size="small"
                    />
                </View>
            );
        } else {
            var energyTypeList = [];
                energyTypeList.push({value:0, label: "All"})
                for ( i in this.props.energyTypes) {
                        energyTypeList.push({ value : this.props.energyTypes[i]['id'] , label : this.props.energyTypes[i]['energytype'] })
                }

            return (
                
                <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                <RNPickerSelect
                        placeholder={{
                            label: 'Choose Energy Type',
                            value: null,
                        }}

                        name = "energyType"
                        items={energyTypeList}
                        style={{ ...pickerSelectStyles }}
                        onValueChange={(value) => {this.onChange(value)}}

                        value={this.state.selectedEnergyType}     
                    />
                <FlatList
                    data={this.props.selectedEnergyDeliveries}
                    renderItem={({ item }) => (
                      <Item
                        id={item.id}
                        title={item.name}
                        obj={item}
                      />
                    )}
                    keyExtractor={item => item.id}
                  />
                    <TouchableHighlight style={styles.addButton} underlayColor='#ff7043' onPress={() => {
                        Actions.jump('rootEnergy');
                        Actions.push('new_feenew_energyDeliverydDelivery');
                       
                        // Actions.new_energyDelivery({ edit:false })
                        }
                    }>
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>

    
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row: {
        backgroundColor: "#fff",
        padding: 8 * 2,
        marginBottom: 1
    },

    author: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8 * 2
    },

    quote: {
        marginTop: 5,
        fontSize: 14,
    },
    feedtype: {
        marginTop: 5,
        fontSize: 14,
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
    return {
        loading : state.EnergyDelivery.loading,
        energyDeliveries: state.EnergyDelivery.energyDeliveries,
        selectedEnergyDeliveries:state.EnergyDelivery.selectedEnergyDeliveries,
        energyTypes: state.EnergyDelivery.energyTypes
    } ;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEnergyDeliveries);
