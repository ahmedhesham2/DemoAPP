import React from 'react';
import FontAwesome from 'react-native-fontawesome';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
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