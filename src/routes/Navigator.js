// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../components/Login';
import Signup from '../components/Signup';
import Intro from '../components/Intro';
import Addpost from '../components/AddPost';
import Colors from '../Constant/Colors'
import Tabs from './Tabs'

const AppNavigator = createStackNavigator({
  intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  tabs: {
    screen: Tabs,
    navigationOptions: {
    }
  },
  
  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },

  Addpost: {
    screen: Addpost,
    navigationOptions: {
      title:'Share post'
    }
  },
  
  
});

export default createAppContainer(AppNavigator);