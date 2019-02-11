
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Home from '../components/Home';
import Profile from '../components/Profile';

import Colors from '../Constant/Colors';

import React from 'react';
import { createStackNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import {AddButton,LogOutButton} from './HeaderButtons'

export default Tab = createMaterialTopTabNavigator({
	Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
           
            tabBarIcon: ({ tintColor }) => {
                return (
                    <FAIcon 
                        name='home'
                        size={20}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => {
                return (
                    <MIcon
                        name='account-circle'
                        size={20}
                        color={tintColor}
                    />
                );
            }
        })
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel:false,

        inactiveTintColor: Colors.blue,
        activeTintColor: Colors.red,
        pressColor: Colors.red,
        indicatorStyle: { backgroundColor: Colors.red },
        style: {
            backgroundColor: Colors.white
        }
    }
});



Tab.navigationOptions = ({ navigation }) => {
    const { state: { routes, index } } = navigation; 
    const navigationOptions = {};

    //
    if (routes[index].routeName === 'Home') {
        navigationOptions.title = 'Home';
        navigationOptions.headerRight = <AddButton navigation={navigation} />;
        navigationOptions.headerLeft = (<LogOutButton navigation={navigation} />);
    }

    if (routes[index].routeName === 'Profile') {
        navigationOptions.title = 'Profile';
        navigationOptions.headerLeft = (<LogOutButton navigation={navigation} />);
    }

    return navigationOptions;
};