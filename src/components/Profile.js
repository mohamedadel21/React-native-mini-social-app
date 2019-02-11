import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {Button,FormInput,Avatar,CheckBox,FormLabel} from 'react-native-elements'
import Colors from '../Constant/Colors';

class App  extends Component {

    constructor(props){
        super(props);

        this.state={
        }
    }
    render() {
        return (

            <View  style={styles.mainView}>
                

            <Avatar 
             xlarge
             rounded
             source={{uri: this.props.profile.url}}
             activeOpacity={0.7}
             
            />


    <Text style={{marginTop:15,color:Colors.blue ,fontSize:13 }}>{this.props.profile.fullName}</Text>

        <View style={{flexDirection:'row'}}>

            <Text style={{marginTop:15,color:Colors.blue ,fontSize:11 }}>Email</Text>
            <Text style={{marginLeft:20,marginTop:15,color:Colors.darkGrey ,fontSize:13 }}>{this.props.profile.email}</Text>

        </View>

        <View style={{flexDirection:'row'}}>

        <Text style={{marginTop:15,color:Colors.blue ,fontSize:11 }}>Adress</Text>
        <Text style={{marginLeft:20,marginTop:15,color:Colors.darkGrey ,fontSize:13 }}>{this.props.profile.address}</Text>

        </View>
        <View style={{flexDirection:'row'}}>

        <Text style={{marginTop:15,color:Colors.blue ,fontSize:11 }}>Phone</Text>
        <Text style={{marginLeft:20,marginTop:15,color:Colors.darkGrey ,fontSize:13 }}>{this.props.profile.phone}</Text>

        </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

    mainView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
       
    },
    linearGradient:{
       
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
  
export default connect(mapStateToProps)(App) ;