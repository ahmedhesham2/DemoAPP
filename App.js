import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from "react-redux";
import { DataStore , persistor } from "./src/Store/Store";
import SwitchNavigator from "./src/Navigators/SwitchNavigator";
import { PersistGate } from 'redux-persist/es/integration/react'

export default function App() {

  return (
    <Provider store = {DataStore}>
      <PersistGate loading={null} persistor={persistor} >
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <SwitchNavigator />
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

