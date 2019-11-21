import React, { PureComponent } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import ListHouses from './ListHouses';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { toggle_Menu } from "../../../Actions";
import { connect } from 'react-redux';

class HouseRouting extends PureComponent {

    render() {
        return (
            <Router navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Stack key="root3">
                <Scene key="ListHouses" component={ListHouses} title="Houses List"  titleStyle={{color: 'white'}}  leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                </Stack>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(HouseRouting);
