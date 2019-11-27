import React, { PureComponent } from 'react';
import { Text , StyleSheet , View } from "react-native"
import { SkypeIndicator } from 'react-native-indicators';

class ActivityIndicator extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
      <SkypeIndicator color='#0d4d9a' />
      <Text style={styles.welcome_msg}>Welcome to Chicken.App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fc'
  },
  welcome_msg : {
      color : '#0d4d9a',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default ActivityIndicator ;