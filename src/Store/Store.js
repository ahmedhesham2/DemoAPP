import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import All_Reducers from "../Reducers";

// Middleware: Redux Persist Config
const persistConfig = {
    // Root?
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'DailyData',
      'Culls',
      'Mortality',
      'Energy',
      'Medication',
      'Sales',
      'Unaccountables'
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
      'All_Farms',
      'WizardData',
    ],
  };


// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, All_Reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Redux: Store
// const DataStore = createStore(
//     persistedReducer,
//     applyMiddleware(...middleware),
//   );
  
  // Middleware: Redux Persist Persister
  const DataStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));  
  let persistor = persistStore(DataStore);
  
  // Exports
  export {
    DataStore,
    persistor,
  };

// const DataStore = createStore(All_Reducers, composeEnhancers(applyMiddleware(thunk)));

