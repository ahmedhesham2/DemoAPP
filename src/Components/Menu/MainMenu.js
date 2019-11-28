import React , { PureComponent } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from "react-navigation";
import { toggle_Menu } from "../../Actions";
import { DataStore } from "../../Store/Store";
import { connect } from "react-redux";

const menu_content = [
    {header : "Farm Deliveries" , content : [{item_name : "Feed Deliveries" , item_route : "FeedDeliveries" , params : {ID : DataStore.getState().Selected_Farm.FarmID , Date : DataStore.getState().selected_date} },{item_name : "Energy Deliveries" , item_route : "EnergyDelivery" , params : {ID : DataStore.getState().Selected_Farm.FarmID , Date : DataStore.getState().selected_date} },{item_name : "Medication Deliveries" , item_route : "MedicationDelivery", params : {ID : DataStore.getState().Selected_Farm.FarmID , Date : DataStore.getState().selected_date} }]},
    {header : "Daily Data", content : []},
    {header : "Management", content : [{item_name : "Farms" , item_route : "FarmsManagement" , params : {} },{item_name : "Houses" , item_route : "HousesManagement" , params : {}},{item_name : "Placements" , item_route : "PlacementsManagement",params : {}},{item_name : "Users" , item_route : "UsersManagement",params : {}},{item_name : "Wizard" , item_route : "Wizard",params : {}},{item_name : "Standards" , item_route : "",params : {}},{item_name : "Farm Closure" , item_route : "FarmClosureManagement",params : {}}]},
    {header : "Administration", content : [{item_name : "Feed Type" , item_route : "FeedTypes",params : {}},{item_name : "Energy Type" , item_route : "", params : {}},{item_name : "Cull Type" , item_route : "" , params : {}},{item_name : "Medication Name" , item_route : "" , params : {}}]},
    {header : "Reports", content : [{item_name : "Daily Summary Report" , item_route : "" , params : {} },{item_name : "Sales Report" , item_route : "" , params : {} },{item_name : "Feed Consumption Report" , item_route : "" , params : {}},{item_name : "Technical Farm Closure Report" , item_route : "" , params : {}},{item_name : "Financial Farm Closure Report" , item_route : "",params : {}}]},
];

var navigation = "" ;


class MainMenu extends PureComponent {

    state = {activeSections: []};
    constructor(props){
        super(props);
        navigation = props.navigation;
    }

    renderHeader = (section, _, isActive) => {
        //Accordion Header view
        return (
          <Animatable.View duration={400} style={styles.customDrawerTouch} >
                <View style={styles.backButtonRow}>
                {section.header === "Farm Deliveries" && <MaterialCommunityIcons name="truck-delivery" size={25} color="#000000"/>}
                {section.header === "Daily Data" && <Ionicons name="md-calendar" size={25} style={styles.customDrawerIcon} color="#000000"/>}
                {section.header === "Management" && <MaterialCommunityIcons name="account-supervisor-circle" size={25} color="#000000"/>}
                {section.header === "Administration" && <MaterialCommunityIcons name="settings-outline" size={25} color="#000000"/>}
                {section.header === "Reports" && <MaterialCommunityIcons name="layers" size={25} color="#000000"/>}
				<Text style={{ color: '#000000' }}>  {section.header}  </Text>
				{ isActive ? <Ionicons name="ios-arrow-down" size={20} style={styles.customDrawerIcon} color="#000000"/> : <Ionicons name="ios-arrow-forward" size={20} style={styles.customDrawerIcon} color="#000000"/> }
				</View>
          </Animatable.View>
        );
    };

    renderContent(section, _, isActive , Data) {

        //Accordion Content view
        if(section.header === "Daily Data"){
            section.content = DataStore.getState().Selected_Farm.Houses
            return (
                  <FlatList
                            data={section.content}
                            renderItem={({ item }) => {
                              return (
                                  <Animatable.View duration={400}>
                                      <TouchableOpacity onPress={()=> console.log(item.HouseName)} style={styles.customDrawerTouch} >
                                        <View style={styles.backButtonRow}>
                                        <Text style={{ color: '#000000' }}>      {item.HouseName}  </Text>
                                        </View>
                                      </TouchableOpacity>
                                  </Animatable.View>
                                );
                            }}
                            keyExtractor={item => item.HouseID}
                    />
            );
        }

        else {
            return (
                  <FlatList
                            data={section.content}
                            renderItem={({ item }) => {
                              return (
                                  <Animatable.View duration={400}>
                                      <TouchableOpacity onPress={()=> item.params.length !== 0 ? navigation.navigate(item.item_route , { id : item.params.ID , date : item.params.Date }) : navigation.navigate(item.item_route) } style={styles.customDrawerTouch} >
                                        <View style={styles.backButtonRow}>
                                        <Text style={{ color: '#000000' }}>  {item.item_name}   </Text>
                                        </View>
                                      </TouchableOpacity>
                                  </Animatable.View>
                                );
                            }}
                            keyExtractor={item => item.item_name}
                    />
            );
        }
    }

    setSections = sections => {
        //setting up a active section state
        this.setState({
          activeSections: sections.includes(undefined) ? [] : sections,
        });
    };


    render(){
            const { activeSections } = this.state;
            return (
               <SafeAreaView style={styles.container} >

                  <TouchableOpacity onPress={()=> this.props.toggle_Menu("Farms_listing")} style={styles.customDrawerTouch} >
                        <View style={styles.backButtonRow}>
                        <Icon name="checkcircle" size={20} color="#3bb73e"/>
                        <Text style={{ color: '#000000' }}>  {this.props.Selected_Farm.FarmName}   </Text>
                            <Ionicons name="ios-arrow-forward" size={20} style={styles.customDrawerIcon} color="#000000"/>
                        </View>
				  </TouchableOpacity>

                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={styles.customDrawerTouch} >
                        <View style={styles.backButtonRow}>
                        <Ionicons name="md-analytics" size={20} style={styles.customDrawerIcon} color="#000000"/>
                        <Text style={{ color: '#000000' }}>  OverView  </Text>
                        </View>
                  </TouchableOpacity>

                <Accordion activeSections={activeSections} sections={menu_content} touchableComponent={TouchableOpacity} expandMultiple={true} renderHeader={this.renderHeader} renderContent={this.renderContent} duration={400} onChange={this.setSections} />


               </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fcf9fc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  customDrawerTouch: {
		paddingLeft: 13,
		paddingTop: 15,
	},

  customDrawerIcon: {
    paddingRight: 10,
  },
	backButtonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 17,
		paddingLeft: 3,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 1,
	},

});

const mapStateToProps = state => {
    return { Selected_Farm : state.Selected_Farm } ;
}

export default withNavigation(connect(mapStateToProps,{toggle_Menu})(MainMenu));
