import React, { PureComponent } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import ListFarms from './ListFarms';
import AddFarm from './AddFarm';
import EditFarm from './EditFarm';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { toggle_Menu } from "../../../Actions";
import { connect } from 'react-redux';

class FarmsRouting extends PureComponent {

    render() {
        return (
            <Router navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Scene key="root1">
                <Scene key="ListFarms" component={ListFarms} title="Farms List" titleStyle={{color: 'white'}}  leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                <Scene key="AddFarm" component={AddFarm} 
                backButtonTintColor="white" back="true" titleStyle={{color: 'white'}}  title="New Farm" />
                <Scene key="EditFarm" component={EditFarm} 
                backButtonTintColor="white" back="true" titleStyle={{color: 'white'}}  title="Edit Farm" />
                </Scene>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(FarmsRouting);
