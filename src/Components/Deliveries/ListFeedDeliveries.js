import React, { PureComponent } from 'react';
import { StyleSheet , FlatList , Text , View , TextInput , TouchableOpacity , ActivityIndicator , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import {bindActionCreators} from 'redux';
import * as ReduxActions from '../../Actions';
import { Actions } from 'react-native-router-flux';
import ActionSheet from 'react-native-actionsheet'; 
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';


//Buttons for Action Sheet
var BUTTONS = [
    "Edit",
    "Delete",
    'Cancel',
];

var feed_obj;
var CANCEL_INDEX = 2;
var _this;

function Item({ id, title, obj }) {
  return (
    <View>
     <TouchableWithoutFeedback onPress={() => Actions.new_feedDelivery({feedObj: obj,  edit: true, feedTypes: _this.props.feedTypes })} >
        <View style={styles.row}>
            <Text style={styles.description}>
                {title}
            </Text>
        </View>
     </TouchableWithoutFeedback>
    </View>
  );
} 

class ListFeedDeliveries extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { selectedFeedType: 0 };
    }
    
    componentDidMount() {
        this.props.getFeedDeliveries();
        _this = this;
    }

    showOptions(feedtype) {
           //To show the Bottom ActionSheet
           feed_obj = feedtype;
           this.ActionSheet.show();
    }

    renderItem({ item, index }) {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => this.showOptions(item)}>
                <View style={styles.row}>
                    <Text style={styles.description}>
                        {item.feedtype}
                    </Text>
                </View>
                </TouchableWithoutFeedback>
                <ActionSheet
                ref={o => (this.ActionSheet = o)}
                //Title of the Bottom Sheet
                title={'Which one do you like ?'}
                //Options Array to show in bottom sheet
                options={BUTTONS}
                //Define cancel button index in the option array
                //this will take the cancel option in bottom and will highlight it
                cancelButtonIndex={2}
                //If you want to highlight any specific option you can use below prop
                destructiveButtonIndex={1}
                onPress={index => {
                  //Clicking on the option will give you the index of the option clicked
                  if (index === 0) Actions.new_feedtype({feedtype: feed_obj, edit: true, title:"Edit Feed Type"})
                  else if (index === 1) _this.props.deleteFeedType(feed_obj.id)
                }}
              />
            </View>
        )
    }
      onChange(value){
        deliveries = {}
        this.props.filterDeliveries(value)
        this.setState({selectedFeedType:value})
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
            var feedTypeList = [];
                feedTypeList.push({value:0, label: "All"})
                for ( i in this.props.feedTypes) {
                        feedTypeList.push({ value : this.props.feedTypes[i]['id'] , label : this.props.feedTypes[i]['feedtype'] })
                }

            return (
                
                <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                <RNPickerSelect
                        placeholder={{
                            label: 'Choose Feed Type',
                            value: null,
                        }}

                        name = "feedType"
                        items={feedTypeList}
                        style={{ ...pickerSelectStyles }}
                        onValueChange={(value) => {this.onChange(value)}}

                        value={this.state.selectedFeedType}     
                    />
                <FlatList
                    data={this.props.selectedFeedDeliveries}
                    renderItem={({ item }) => (
                      <Item
                        id={item.id}
                        title={item.name}
                        obj={item}
                      />
                    )}
                    keyExtractor={item => item.id}
                  />
                    <TouchableHighlight style={styles.addButton} underlayColor='#ff7043' onPress={() =>{
                     Actions.jump('rootFeed');
                     Actions.push('new_feedDelivery');
                    //  Actions.new_feedDelivery({ edit:false })
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
        loading : state.FeedDeliveries.loading,
        feedDeliveries: state.FeedDeliveries.feedDeliveries,
        selectedFeedDeliveries:state.FeedDeliveries.selectedFeedDeliveries,
        feedTypes: state.FeedDeliveries.feedTypes
    } ;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFeedDeliveries);
