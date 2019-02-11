
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Home from '../components/Home';
import Profile from '../components/Profile';

import Colors from '../Constant/Colors';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const AddButton =({navigation})=>{
    return(
        <TouchableOpacity style={{marginRight:10}}>
        <MIcon
            name='add-circle'
            size={22}
            color={Colors.blue}
            onPress={()=>{
                navigation.navigate('Addpost');
            }}
        />

        </TouchableOpacity>
    );
}

export const LogOutButton  =({navigation})=>{
    return(
        <TouchableOpacity style={{marginLeft:10}}>
        <FAIcon
            name='sign-out'
            size={22}
            color={Colors.blue}
        />

        </TouchableOpacity>
    );
}