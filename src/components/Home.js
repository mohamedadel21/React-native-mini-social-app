import React, { Component } from 'react';
import { Text, StyleSheet, View,FlatList } from 'react-native';
import firebase from '../components/firebase';
import {Button,FormInput,Avatar,CheckBox,ListItem,Card,FormLabel} from 'react-native-elements'
export default class  extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        firebase.database().ref('posts')
            .limitToLast(30)
            .on('value', (snapshot) => {
                const data = snapshot.val() || [];
                const posts = [];
                Object.values(data).forEach(item => {
                    posts.unshift(item);

                });
                this.setState({data:posts})
            });

    }

    renderItemList({item}){


        return(
            <Card
            title={item.title}
            image={{uri : item.url}}>
            <ListItem
            title={item.autherName}
            avatar={{uri: item.autherImage}}
            roundAvatar
            ></ListItem>
            </Card>
        );
     }

    keyextractor=(item,index)=>index;


    render() {

        this.state.data.map(prof=>{
            console.log("fffffffffff"+prof.autherImage);
        })
        return (
            <View>

            <FlatList
            data={this.state.data}
            renderItem={this.renderItemList}
            keyExtractor={this.keyextractor}
            />
            
            
            </View>
        );
    }
}

const styles = StyleSheet.flatten({});