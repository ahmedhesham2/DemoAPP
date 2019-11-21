import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MenuDrawer from "../Components/Menu/MenuDrawer";
import MenuButton from "../Components/Menu/MenuButton";
import Main from "../Components/Administration/feedtypes";
import FarmsRouting from "../Components/Management/Farms/FarmsRouting";
import HousesRouting from "../Components/Management/Houses/HousesRouting";
import FarmClosureRouting from "../Components/Management/FarmClosure/FarmClosureRouting";
import PlacementsRouting from "../Components/Management/Placements/PlacementsRouting";
import UsersRouting from "../Components/Management/Users/UsersRouting";
import Layout from "../Components/OverView/Layout";
import DailyData from '../Components/DailyDataComponents/DailyData';
import FeedDeliveries from "../Components/Deliveries/feedDeliveries";
import EnergyDelivery from "../Components/Deliveries/EnergyDelivery";
import MedicationDelivery from "../Components/Deliveries/MedicationDelivery";
import WizardPage from "../Components/Management/Wizard/WizardPage";

const DrawerConfig = {
  contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}


const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: Layout
		},
		
		MedicationDelivery: {
			screen: MedicationDelivery
		},

		EnergyDelivery: {
			screen: EnergyDelivery
		},

		FeedDeliveries: {
			screen: FeedDeliveries
		},

		FeedTypes: {
			screen: Main
		},

		Wizard:{
		    screen: WizardPage
		},

		FarmsManagement: {
		    screen: FarmsRouting
		},

		HousesManagement: {
		    screen: HousesRouting
		},

		PlacementsManagement: {
		    screen: PlacementsRouting
		},

		FarmClosureManagement: {
		    screen: FarmClosureRouting
		},

		UsersManagement: {
		    screen: UsersRouting
		},

		DailyData:{
			screen: DailyData,
		},

	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);