import React, { Component } from 'react';
import { Text, StyleSheet, View,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,FormInput,Avatar,CheckBox,FormLabel} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux'
import  signup  from '../actions/AuthAction';


 class App extends Component {

   
    componentWillReceiveProps(nextProp){

        if(nextProp.signup){
            this.props.navigation.navigate('login');
        }
    }

    constructor(props){
        super(props);

        this.state={
            photoURI:'',
            fullName:'',
            email:'',
            password:'',
            address:'',
            phone:'',
            disabled:true
        }
    }

    ChoosePhoto =()=>{
        const option={
            title:"choose your photo",
            mediaType:'photo',
            quality:0.1
        }

        ImagePicker.showImagePicker(option,(response)=>{
            if(response){
                this.setState({photoURI:response.uri,disabled:false});
        }else{
            this.setState({disabled:true})
        }
        })
    }

    signup =()=>{

        const {photoURI,fullName,email,password,address,phone}=this.state;
        this.props.signup({photoURI,fullName,email,password,address,phone});
    }

    render() {
        return (

        <View style={styles.mainView}>
      

        <ImageBackground source={require('../Image/image3.jpg')} style={styles.imageBack}>

        <LinearGradient colors={['#705ad944','#705ad944','#705ad9ee']} style={styles.linearGradient}>

            <View style={styles.headerView}>

            <Text style={styles.headerText}>Create new account</Text>

            <Avatar
             medium
            rounded
             source={{uri: this.state.photoURI}}
             activeOpacity={0.7}
             containerStyle={{marginLeft:20}}
             onPress={this.ChoosePhoto}
            />

            <FormLabel style={{marginLeft:20}}>Full name</FormLabel>
            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
                keyboardType='name-phone-pad'
                onChangeText={(fullName)=>{
                    this.setState({fullName});
                }}
               />
            </View>

            <FormLabel style={{marginLeft:20}}>Email</FormLabel>
            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='email-address'
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

            <FormLabel style={{marginLeft:20}}>Phone</FormLabel>
            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
                keyboardType='numeric'
                onChangeText={(phone)=>{
                    this.setState({phone});
                }}
               />
            </View>


            <FormLabel style={{marginLeft:20}}>Address</FormLabel>
            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
                keyboardType='numeric'
                onChangeText={(address)=>{
                    this.setState({address});
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
                marginBottom:15,
                
              }

            }
           disabled={this.state.disabled}
           onPress={this.signup}
           loading={this.props.loading}

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
      width:300,
       


      },
      mainText:{

        color:Colors.white,
        fontSize:27,
        fontWeight:'bold',
        textAlign: 'center',
    
      },
      headerText:{

          color:Colors.darkGrey,
          fontSize:17,
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
    signup:state.auth.signup
  }
};
  
  export default connect(mapStateToProps,{signup})(App) ;