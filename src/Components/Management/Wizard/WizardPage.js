import React , { PureComponent ,  Component } from 'react';
import { View , Button , TextInput , StyleSheet , Text } from "react-native";
import Progress from "./Progress";
import MenuButton from "../../Menu/MenuButton";

class WizardPage extends PureComponent {

  constructor(props){
    super(props);
    this.state = { page : 0 } ;
    this.next_page = this.next_page.bind(this);
    this.previous_page = this.previous_page.bind(this);
  }

  next_page = () => {
    this.setState({ page : this.state.page + 1 }) ;
  }

  previous_page = () => {
    this.setState({ page : this.state.page - 1 }) ;
  }

  reset_page = () => {
    this.setState({ page : 0 }) ;
  }

  render() {
    return (
      <>
      <MenuButton navigation={this.props.navigation} />
      <View style={{ flex: 1, marginTop: 20 }}>
        { this.state.page === 0 && <Progress activeStep={0} on_next = {this.next_page} on_previous = {this.previous_page} navigation = {this.props.navigation} /> }
        { this.state.page === 1 && <Progress activeStep={1} on_next = {this.next_page} on_previous = {this.previous_page} navigation = {this.props.navigation} /> }
        { this.state.page === 2 && <Progress activeStep={2} on_next = {this.reset_page} on_previous = {this.previous_page} navigation = {this.props.navigation} /> }
      </View>
      </>
    );
  }
}

export default WizardPage;
