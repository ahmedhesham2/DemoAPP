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
     <TouchableWithoutFeedback >
        <View style={styles.row}>
            <Text style={styles.description}>
                {title}
            </Text>
        </View>
     </TouchableWithoutFeedback>
    </View>
  );
} 

class ListMedicationDeliveries extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { selectedMedicationName: 0 };
    }
    
    componentDidMount() {
        this.props.getMedicationDeliveries();
        _this = this;
    }



      onChange(value){
        deliveries = {}
        this.props.filterMedicationDeliveries(value)
        this.setState({selectedMedicationName:value})
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
            var medicationNameList = [];
                medicationNameList.push({value:0, label: "All"})
                for ( i in this.props.medicationNames) {
                        medicationNameList.push({ value : this.props.medicationNames[i]['id'] , label : this.props.medicationNames[i]['medicationname'] })
                }

            return (
                
                <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                <RNPickerSelect
                        placeholder={{
                            label: 'Choose Medication Name',
                            value: null,
                        }}

                        name = "energyType"
                        items={medicationNameList}
                        style={{ ...pickerSelectStyles }}
                        onValueChange={(value) => {this.onChange(value)}}

                        value={this.state.selectedMedicationName}     
                    />
                <FlatList
                    data={this.props.selectedMedicationDeliveries}
                    renderItem={({ item }) => (
                      <Item
                        id={item.id}
                        title={item.name}
                        obj={item}
                      />
                    )}
                    keyExtractor={item => item.id}
                  />

    
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
        loading : state.MedicationDelivery.loading,
        medicationDeliveries: state.MedicationDelivery.medicationDeliveries,
        selectedMedicationDeliveries:state.MedicationDelivery.selectedMedicationDeliveries,
        medicationNames: state.MedicationDelivery.medicationNames
    } ;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMedicationDeliveries);
