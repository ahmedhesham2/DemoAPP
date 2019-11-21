import React, { Component, PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListEnergyDeliveries from './ListEnergyDeliveries';
import NewEnergyDelivery from './newEnergyDelivery';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { toggle_Menu } from "../../Actions";
import { connect } from 'react-redux';

class EnergyDelivery extends PureComponent {

    render() {
        return (
          
            <Router  navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Scene key="rootEnergy">
                <Scene key="ListEnergyDeliveries" component={ListEnergyDeliveries} titleStyle={{color: 'white'}} title="Energy Deliveries" leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                <Scene key="new_energyDelivery" component={NewEnergyDelivery} backButtonTintColor="white" back="true" titleStyle={{color: 'white'}} title="New Energy Delivery" />
                </Scene>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(EnergyDelivery);