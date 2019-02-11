import React, { Component } from 'react';
import { Text, StyleSheet, View,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements'
import Colors from '../Constant/Colors';

export default class  extends Component {
    render() {
        return (

        <View style={styles.mainView}>
        <ImageBackground source={require('../Image/image.jpg')} style={styles.imageBack}>

        <LinearGradient colors={['#705ad944','#705ad944','#705ad9ee']} style={styles.linearGradient}>

            <View style={styles.headerView}>
            <Text style={styles.headerText}>Find new{"\n"}friends nearby</Text>
            <Text style={styles.decsText}>welcome to our app , please press the login button to get started your first tour.</Text>
           <Button 
           title='Login'
           backgroundColor={Colors.white}
           color={Colors.darkGrey}
            buttonStyle={{
                height:32
                ,width:200,
                borderRadius:40, 
                marginTop:20
            }
            }
           onPress={()=>{
               this.props.navigation.navigate('login')
           }}
           />
           <Button 
           title='Don`t have account?'
           backgroundColor='#ffffff00'
           color={Colors.white}
            buttonStyle={{
                height:32
                ,width:200,
                borderRadius:20, 
                marginTop:10,
                marginBottom:20,
                borderColor:Colors.white,
                borderWidth:1
            }
            
            }
            onPress={()=>{
                this.props.navigation.navigate('signup')
            }}
           />
            </View>

         </LinearGradient>            
           
        </ImageBackground>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    imageBack:{
        flex:1
    }
    ,
    linearGradient: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent:'flex-end',
        alignItems:'flex-start'
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      headerView:{
        
      },
      headerText:{
          color:Colors.white,
          fontSize:35,
          fontWeight:'bold'
          ,marginLeft:10

      },decsText:{
        color:Colors.white,
        fontSize:14,
        marginRight:60         
        ,marginLeft:10

      },
      login:{
        
      }
});