import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import LoginForm from '../Components/UserAuthentication/LoginForm';
import RegisterForm from '../Components/UserAuthentication/RegisterForm';
import ResetPasswordForm from '../Components/UserAuthentication/ResetPasswordForm';

const StackNavigator = createStackNavigator(
  {
    login: LoginForm,
    register: RegisterForm,
    resetpassword: ResetPasswordForm,
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      title: 'Chicken.App'
    }
  }
);

export default createAppContainer(StackNavigator);