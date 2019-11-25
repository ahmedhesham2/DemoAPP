import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { toggle_Menu } from "../../Actions";
import { connect } from "react-redux";

class MenuButton extends React.PureComponent {
	render() {
		return(
			<Ionicons
				name="md-menu"
				color="#293d52"
				size={23}
				style={styles.menuIcon}
				onPress={() => {
				(this.props.toggle_Menu("Main_Menu"))
				this.props.navigation.toggleDrawer()
				}}
			/>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		// position: 'absolute',
		// marginTop: -10,
		// le172.20.10.2ft: 10,
		marginLeft: 10,
		// padding: 8,
		// marginTop: 10,
		// borderRadius:120,
		width: 38,
		height: 38,
		color: '#dfe0e2',
		// backgroundColor:'white',
		// opacity: .8,
	}
})

export default connect(null,{toggle_Menu})(MenuButton);
