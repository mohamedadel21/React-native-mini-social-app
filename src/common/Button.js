
import React ,{Component} from 'react';
import {AppRegistry,TouchableOpacity,Text,View,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const Button = (props) =>{
    return(
    <TouchableOpacity style={styles.viewStyle} onPress={props.onPress}>

      <Text style={styles.textStyle}>{props.textTitle} </Text>
    
    </TouchableOpacity>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#c2bb00',
       height:32
       ,width:200,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:2,
       borderRadius:50, 
       marginTop:15
    },
    textStyle:{
        color:'#fff',
        fontSize:13,
        fontWeight:'normal',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
    }

    
});
export default Button;