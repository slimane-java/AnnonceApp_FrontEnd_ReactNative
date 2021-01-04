/*import React, { Component } from 'react';
import { Container,Title, Right,Icon,Thumbnail,Left,Header, Image,Content,Card,CardItem,Body, Form, Item, Input, Label, Button } from 'native-base';
import {View,Text,BackHandler,useWindowDimensions} from 'react-native'
import { StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from '../Accueil/Accueil';
import Client from '../ClientComponents/Client'
import { withNavigation } from 'react-navigation';

const Drawer = createDrawerNavigator();




export default class Menu extends Component {


     componentDidMount()
     {
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
          });
     }

     render () {
     
    return (
      
    <Drawer.Navigator >
      <Drawer.Screen name="Accueil" component={Accueil} />
      <Drawer.Screen name="Client" component={Client} />
      
    </Drawer.Navigator>

    );
  }
}



const styles = StyleSheet.create({

loginFormTextInput: {
    width:250,
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    
    paddingLeft: 10,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 5,
    marginBottom: 5,
  
  },


  loginButton: {  // se connecter button
    width:250,
    borderRadius: 5,
    height: 40,
    marginTop: 25,
    paddingLeft: 10,
    marginLeft: 17,
    marginRight: 17,
    backgroundColor:'pink'
  
  },

})
*/