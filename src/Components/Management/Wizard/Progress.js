import React , { PureComponent ,  Component } from 'react';
import { View , Button , TextInput , StyleSheet , Text , ScrollView } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import WizardFirstPage from "./WizardFirstPage";
import WizardSecondPage from "./WizardSecondPage";
import WizardThirdPage from "./WizardThirdPage";


class Progress extends PureComponent {

  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  render(){
      return (
        <ProgressSteps activeStep={this.props.activeStep}>
          <ProgressStep
            label="Add Your Farm"
            nextBtnDisabled = {true}
            nextBtnStyle = {{display: 'none'}}
            previousBtnDisabled = {true}
            previousBtnStyle = {{display: 'none'}}
            scrollViewProps={this.defaultScrollViewProps}
          >
          <View style={{ alignItems: 'center' }}>
            <WizardFirstPage on_next = {this.props.on_next} navigation = {this.props.navigation} />
          </View>
          </ProgressStep>

          <ProgressStep
            label="Add Your House"
            nextBtnDisabled = {true}
            nextBtnStyle = {{display: 'none'}}
            previousBtnDisabled = {true}
            previousBtnStyle = {{display: 'none'}}
            scrollViewProps={this.defaultScrollViewProps}
          >
          <View style={{ alignItems: 'center' }}>
            <WizardSecondPage on_next = {this.props.on_next} on_previous = {this.props.on_previous} navigation = {this.props.navigation} />
          </View>
          </ProgressStep>

          <ProgressStep
          label="Place Your Chicks"
          nextBtnDisabled = {true}
          nextBtnStyle = {{display: 'none'}}
          previousBtnDisabled = {true}
          previousBtnStyle = {{display: 'none'}}
          scrollViewProps={this.defaultScrollViewProps}
          >
          <View style={{ alignItems: 'center' }}>
            <WizardThirdPage on_previous = {this.props.on_previous} on_next = {this.props.on_next} navigation = {this.props.navigation} />
          </View>
          </ProgressStep>
        </ProgressSteps>
      );
    }
}

export default Progress;
