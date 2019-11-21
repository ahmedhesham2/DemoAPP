import React, { Component, PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListMedicationDeliveries from './ListMedicationDeliveries';
import { Ionicons } from 'react-native-vector-icons';
import { toggle_Menu } from "../../Actions";
import { connect } from 'react-redux';

class MedicationDelivery extends PureComponent {
    render() {
        return (
            <Router navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}> 
                <Scene key="rootMed">
                <Scene key="ListMedicationDeliveries" component={ListMedicationDeliveries} titleStyle={{color: 'white'}} title="Medication Deliveries" leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                </Scene>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(MedicationDelivery);