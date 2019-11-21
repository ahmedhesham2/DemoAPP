import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons , MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';


const components = {
    Ionicons : Ionicons ,
    FontAwesome: FontAwesome,
    MaterialCommunityIcons: MaterialCommunityIcons,
    Icon : Icon,
    AwesomeIcon:AwesomeIcon,
};

function IconComponent (props){
    const SpecificIcon = components[props.IconType];
    return <SpecificIcon name={props.name} size={props.size} color={props.color} onPress={props.onPress}  />;
}

export default IconComponent;