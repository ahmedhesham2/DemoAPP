import React, { Component, PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListFeedDeliveries from './ListFeedDeliveries';
import NewFeedDelivery from './newFeedDelivery';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { toggle_Menu } from "../../Actions";
import { connect } from 'react-redux';

class FeedDeliveries extends PureComponent {

    render() {
        return (
            <Router navigationBarStyle={{ color: 'white', backgroundColor: '#0d4d9a' }}>
                <Scene key="rootFeed">
                <Scene key="ListFeedDeliveries" component={ListFeedDeliveries} titleStyle={{color: 'white'}} title="Feed Deliveries" leftTitle={<Ionicons name="md-menu" size={23} color="white" />}
                    onLeft={()=> {
                        this.props.toggle_Menu("Main_Menu")
                        this.props.navigation.toggleDrawer()
                    }} initial/>
                <Scene key="new_feedDelivery" component={NewFeedDelivery} backButtonTintColor="white" back="true" titleStyle={{color: 'white'}} title="New Feed Delivery" />
                </Scene>
            </Router>
        );
    }
}

export default connect(null,{toggle_Menu})(FeedDeliveries);
