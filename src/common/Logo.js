
import React ,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const Logo = (props) =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        height:60,
        width:60,
        alignItems:'center',
       justifyContent:'center',
       borderColor:'#fff',
       borderRadius:50,
       borderWidth:1
    },
    textStyle:{
        
        fontSize:25,
        fontWeight:'bold',
        color:'#fff',

        

    }
});
export default Logo;