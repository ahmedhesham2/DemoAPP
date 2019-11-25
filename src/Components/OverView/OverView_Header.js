import React from 'react';
import { Text } from 'react-native';
import { withNavigation } from "react-navigation";
import MenuButton from '../Menu/MenuButton';
import { Header } from "react-native-elements";
import IconComponent from "../Icons/Icon";
import { toggle_calendar } from "../../Actions";
import { connect } from "react-redux";
import styles from '../Dark.style';


class OverviewHeader extends React.PureComponent {
    render(){
        return(
            <Header
              leftComponent={<MenuButton navigation={this.props.navigation} />}
              centerComponent={<Text style={styles.header_center_text} >{this.props.FarmName}</Text>}
              rightComponent={<IconComponent IconType="AwesomeIcon" name="calendar-alt" size={23} color="#dfe0e2" onPress={()=>{this.props.toggle_calendar(true)}} />}
              containerStyle={styles.containerHeader}
              innerContainerStyles={{ justifyContent: 'space-around' }}
            />
        );
    }
}

export default withNavigation(connect(null,{toggle_calendar})(OverviewHeader));