import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers  from './src/redux';
import { Home, CarDetail, SearchForm, SearchListing } from './src/screens';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#CD1719',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
  },
  app: {
    width: '100%',
    flex: 1,
  },
});

const AppWithRouter = StackNavigator({
  Home: { screen: Home },
  CarDetail: { screen: CarDetail },
  SearchListing: { screen: SearchListing },
  SearchForm: { screen: SearchForm },
});

const App = () => (
  <Provider store={store} >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Fake Glacier</Text>
      </View>
      <View style={styles.app}>
        <AppWithRouter />
      </View>
    </View>
  </Provider>
)

export default App;
