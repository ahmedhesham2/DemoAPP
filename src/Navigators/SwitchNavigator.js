import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";
import ActivityIndicator from "../Components/common/ActivityIndicator";

export default createAppContainer(createSwitchNavigator(
  {
    stack: StackNavigator,
    drawer: DrawerNavigator,
    loading : ActivityIndicator,
  },
  {
    initialRouteName: 'stack',
  }
));