import React, { PureComponent } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import ListFarmClosure from './ListFarmClosure';
import { Ionicons } from 'react-native-vector-icons';
import { toggle_Menu } from "../../../Actions";
import { connect } from 'react-redux';

class FarmClosureRouting extends PureComponent {

    render() {
        return (
            <Router navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Stack key="root2">
                <Scene key="ListFarmClosure" component={ListFarmClosure} title="Farm Closures" titleStyle={{color: 'white'}}  leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                </Stack>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(FarmClosureRouting);
