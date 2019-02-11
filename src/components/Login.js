import React, { Component } from 'react';
import { Text, StyleSheet, View,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,FormInput,FormLabel} from 'react-native-elements'
import {connect} from 'react-redux';
import {login} from '../actions/AuthAction'

 class App  extends Component {

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            disabled:false
        }
    }

    login =()=>{

        const {email,password}=this.state;
        this.props.login({email,password});
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.profile) {
            this.props.navigation.navigate('tabs');
        }
    }
    render() {
        return (

        <View style={styles.mainView}>
      

        <ImageBackground source={require('../Image/image3.jpg')} style={styles.imageBack}>

        <LinearGradient colors={['#705ad944','#705ad944','#705ad9ee']} style={styles.linearGradient}>

            <View style={styles.headerView}>

            <Text style={styles.headerText}>Login</Text>

            <FormLabel style={{marginLeft:20}}>Email</FormLabel>
            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}

              onChangeText={(email)=>{
                this.setState({email});
              }}
               />
            </View>
            <FormLabel  style={{marginLeft:20}}>Password</FormLabel>

            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={(password)=>{
                this.setState({password});
              }}
               />
            </View>

            <Text style={{marginLeft:20,color:Colors.red}}>{this.props.error}</Text>

           <Button 
           title='GO'
           backgroundColor={Colors.green}
           color={Colors.white}
            buttonStyle={{
                height:32,
                borderRadius:25, 
                marginTop:35,
                marginLeft:10,
                marginRight:10,
                shadowColor:'#c2c2c2',
                shadowOpacity:.2,
                shadowOffset:{width:0,height:2},
                elevation:5,
              }

            }
            loading={this.props.loading}
            onPress={this.login}
           
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
        
        justifyContent:'center',
        alignItems:'center'
      },
     
      headerView:{
        backgroundColor:'#ffffffcc',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:5,
       borderRadius:20, 
      width:260,
       height:330,
       


      },
      mainText:{

        color:Colors.white,
        fontSize:27,
        fontWeight:'bold',
        textAlign: 'center',
    
      },
      headerText:{

          color:Colors.darkGrey,
          fontSize:23,
          fontWeight:'bold',  
          marginBottom:15,
          textAlign: 'center',
          marginTop:14

      },decsText:{
        color:Colors.white,
        fontSize:14,
        marginRight:60         
        ,marginLeft:10
,
      },
      formInput:{
        backgroundColor:'#edededaa',
        marginLeft:20,
         marginRight:20,
        height:35,
        borderRadius:25, 

      }
});

const mapStateToProps =state=>{
    return{
    loading:state.auth.loading,
    error:state.auth.error,
    signup:state.auth.signup,
    profile:state.auth.profile,
    login:state.auth.login
  }
};
  
export default connect(mapStateToProps,{login})(App) ;