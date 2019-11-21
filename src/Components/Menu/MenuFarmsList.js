import React from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    FlatList ,
    SafeAreaView
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { toggle_Menu , select_menu_farm } from "../../Actions";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { Divider } from "react-native-elements";

class MenuFarmsList extends React.PureComponent {
    render(){
            return (
               <SafeAreaView style={styles.container}>

                  <TouchableOpacity
					onPress={()=> this.props.toggle_Menu("Main_Menu")}
					style={styles.customDrawerTouch}
				>
					<View style={styles.backButtonRow}>
						<Ionicons
							name="ios-arrow-back"
							size={25}
							style={styles.customDrawerIcon}
							color="#666666"
						/>
						<Text style={{ color: '#666666' }}>Back to Main Menu</Text>
					</View>
				</TouchableOpacity>

                  <FlatList
                    data={this.props.All_Farms_Houses_Cycles}
                    renderItem={({ item }) => {
                      return (
                            <TouchableOpacity onPress={ ()=>{
                            this.props.navigation.toggleDrawer()
                            this.props.navigation.navigate('Home')
                            this.props.select_menu_farm(item)
                            }}>
                            <View style={styles.item}>
                            <Text style={styles.title}>{item.FarmName}</Text>
                            </View>
                              <Divider/>
                            </TouchableOpacity>
                      );
                    }}
                    keyExtractor={item => item.FarmName}
                  />
               </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#fcf9fc',
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#666666' ,
  },
  customDrawerTouch: {
		paddingLeft: 13,
		paddingTop: 15,
	},

	customDrawerIcon: { paddingRight: 10 },
	backButtonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 17,
		paddingLeft: 3,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 1,
	},
});

const mapStateToProps = state => {
    return { All_Farms_Houses_Cycles : state.All_Farms_Houses_Cycles } ;
}

export default withNavigation(connect(mapStateToProps,{toggle_Menu , select_menu_farm})(MenuFarmsList));