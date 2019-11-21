import React, { Component } from 'react'
import {View, Image , Text , StyleSheet } from 'react-native'


class Header extends Component {

	render(){
		return(
 		<View style = {styles.containerStyle}>
 			{/* <Image style = {styles.imgStyle} source={require('../../../assets/Chicken-App-Wide.png')}/ > */}
 			{/* <Text style = { styles.textStyle}> Forgot Password </Text> */}
 		</View>
	  );
	}
}


const styles = StyleSheet.create({
	
	containerStyle: {
	    flex: 1,
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: 35
  	},
	textStyle: {
		fontWeight: 'bold',
		fontSize: 20,
	},

	imgStyle :{
		width:40,
		height:40,
	}

})

export { Header };