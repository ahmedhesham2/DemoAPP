import PropTypes from 'prop-types';
import React, {Component , PureComponent} from 'react';
import styles from './Menu.style';
import {NavigationActions , withNavigation} from 'react-navigation';
import {ScrollView, Text, View , Switch, TouchableOpacity} from 'react-native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
//import MainMenu from "./MainMenu";
import MenuFarmsList from "./MenuFarmsList";
import DrawerHeader from "./DrawerHeader";
import { connect } from "react-redux";

class MenuDrawer extends PureComponent {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
      <DrawerHeader/>
        <ScrollView>

          <View>
          {this.props.Menu_Page === "Main_Menu" ? <MenuFarmsList/> : <MenuFarmsList/>}
          </View>

        </ScrollView>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('stack')}>
            <MaterialCommunityIcons name="logout" size={25} color="#000000"/>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

MenuDrawer.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = state => {
    return { Menu_Page : state.Menu_Page } ;
}

export default withNavigation(connect(mapStateToProps)(MenuDrawer));
