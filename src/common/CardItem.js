
import React ,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const Header = (props) =>{
    return(
        <View style={styles.viewStyle}>
        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#ffffff00',
       height:60,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:1

    }
});
export default Header;