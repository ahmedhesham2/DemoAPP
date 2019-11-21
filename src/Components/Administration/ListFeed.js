import React, { PureComponent } from 'react';
import { StyleSheet , FlatList , Text , View , TextInput , TouchableOpacity , ActivityIndicator , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import {bindActionCreators} from 'redux';
import * as ReduxActions from '../../Actions';
import { Actions } from 'react-native-router-flux';
import feedTypesData from './feedtypes.json';
import ActionSheet from 'react-native-actionsheet'; 
import {connect} from 'react-redux';

//Buttons for Action Sheet
var BUTTONS = [
    "Edit",
    "Delete",
    'Cancel',
];

var feed_obj;
var CANCEL_INDEX = 2;
var _this;


class ListFeedTypes extends PureComponent {

    constructor(props) {
        super(props);   
    }
    componentWillMount(){
        // Actions.r    eset();
                        
    }

    componentDidMount() {
        this.props.getFeedTypes();
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
            return (
                <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
                    <FlatList data={this.props.feedtypes} 
                              renderItem={this.renderItem.bind(this)}
                              keyExtractor={item => item.feedtype}
                              />

                    <TouchableHighlight style={styles.addButton} underlayColor='#248ecc' onPress={() => {
                        // Actions.new_feedtype();
                        Actions.jump('root');
                        Actions.push('new_feedtype');

                        // Actions.jump('router1'); Actions.jump('new_feedtype')
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
        marginBottom: 1,
        margin: 5,
        // padding: 40,
        borderRadius: 5,
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

const mapStateToProps = state => {
    return {
        loading : state.FeedTypes_page.loading,
        feedtypes: state.FeedTypes_page.feedtypes
    } ;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFeedTypes);
