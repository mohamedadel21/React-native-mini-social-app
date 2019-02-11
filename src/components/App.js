import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Input from '../common/Input';
import Logo from '../common/Logo';
import Header from '../common/Header';
import Button from '../common/Button';
import ActivityIndicator1 from '../common/ActivityIndicator';
import Navigator from '../routes/Navigator';
import {Provider} from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

export default class  extends Component {

  constructor(props){
    super(props);
    this.state ={

    };
  }

  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <Navigator></Navigator>
      </Provider>
    );
  }

}


const styles = StyleSheet.create({
  container0:{
    backgroundColor:'#02afff',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});