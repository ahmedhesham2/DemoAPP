import React, { PureComponent } from 'react';
import { Text } from "react-native";
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import ListFeedTypes from './ListFeed';
import NewFeedType from './new_feedtype';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { toggle_Menu } from "../../Actions";
import { connect } from 'react-redux';

class Main extends PureComponent {
    componentDidMount(){
        console.log("mountttttttttttttttttttt");
        

    }
    componentWillMount(){
        // console.log("WILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        // console.log(Actions.currentScene);
        // Actions.jump("ListFeedTypes");
    }
    render() {
        return (
            <Router name="router1" navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Scene key="root">
                <Scene key="ListFeedTypes" component={ListFeedTypes} title="Feed Types" titleStyle={{color: 'white'}} leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                <Scene key="new_feedtype" component={NewFeedType} 
                
                backButtonTintColor="white" back="true" titleStyle={{color: 'white'}} title="New Feed Type" />
                </Scene>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(Main);
