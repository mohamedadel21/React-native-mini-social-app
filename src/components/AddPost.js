import React, { Component } from 'react';
import { Text, StyleSheet, View,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,FormInput,Avatar,CheckBox,FormLabel} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux'
import  signup  from '../actions/AuthAction';
import  addpost  from '../actions/PostAction';
import firebase from '../components/firebase';
import {uploadImage} from '../actions/Helper';

 class App extends Component {

  
    constructor(props){
        super(props);

        this.state={
            url:'',
            title:'',
            imageName:'',
            disabled:true,
            error:'',
            done:false
        }

    }

    addPost =()=>{
        
        const {url,title,imageName}=this.state;
        const autherID =this.props.profile.id;
        const autherImage =this.props.profile.url;
        const autherName =this.props.profile.fullName;

        uploadImage(url,'posts',imageName)
        .then((url)=>{
    
            firebase.database().ref('posts').push({autherID,autherImage,autherName,url,imageName,title})
            .then((reponse)=>{
               this.setState({done:true})
               this.props.navigation.goBack();
            })
            .catch((error)=>{

                this.setState({error:error.message})
                
            })
    
        }) 
        
    }

       ChoosePhoto =()=>{
        const option={
            title:"choose photo to share",
            mediaType:'photo',
            quality:0.1
        }

        ImagePicker.showImagePicker(option,(response)=>{
          
            if(response){
                const imageN=this.props.profile.id+''+response.fileName;
                this.setState({url:response.uri,disabled:false});
                this.setState({imageName:imageN});
               
            }

        })
    }

  

    render() {
        return (

        <View style={styles.mainView}>
      


        <LinearGradient colors={['#705ad944','#705ad944','#705ad9ee']} style={styles.linearGradient}>


            <View style={styles.headerView}>

            <FormLabel style={{}}
            labelStyle={{marginLeft:20,color:Colors.white}}>Choose image</FormLabel>

            <Avatar
             large
            rounded
             activeOpacity={0.7}
             containerStyle={{marginLeft:20,marginTop:10}}
             onPress={this.ChoosePhoto}
             source={{uri: this.state.url}}

            />

            <View style={styles.formInput}>
            <FormInput
              autoCapitalize="none"
              autoCorrect={true}
                keyboardType='default'
                onChangeText={(title)=>{
                    this.setState({title});
                }}
                placeholder='what`s in your'
                placeholderTextColor={Colors.white}
                inputStyle={{color:Colors.white}}
               />
            </View>

            
            <Text style={{marginLeft:15,color:Colors.red}}>{this.props.error}</Text>

           <Button 
           title='Share'
           backgroundColor={Colors.green}
           color={Colors.white}
            buttonStyle={{
                height:32,
                borderRadius:25, 
                marginTop:27,
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
           onPress={this.addPost}
           loading={this.props.loading}

           />
          
            </View>
           
         </LinearGradient>            
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
        
        justifyContent:'flex-start',
        alignItems:'flex-start'
      },
     
      headerView:{
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
        marginLeft:10,
        marginRight:20,
        height:35,
        borderRadius:25, 
        borderColor:"#fff",
        borderBottomWidth:1

      }
});


const mapStateToProps =state=>{
    return{
    loading:state.post.loading,
    error:state.post.error,
    done:state.post.done,
    profile:state.auth.profile,
  }
};
  
  export default connect(mapStateToProps,{addpost})(App) ;