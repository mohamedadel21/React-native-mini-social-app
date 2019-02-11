
import React ,{Component} from 'react';
import {AppRegistry,Text,View,TextInput,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const Input = (props) =>{
   
    return(

        <View  style={styles.viewStyle}>

            <TextInput onChangeText={props.onChange} secureTextEntry={props.check} style={styles.textStyle} placeholder={props.textHint} >

        </TextInput>

        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#fff',
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
        color:'#000',
        fontSize:13,
        fontWeight:'normal',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
    }
});
export default Input;