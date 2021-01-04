import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import ClientStack from '../Stack/ClientStack';
import HomeStack from '../Stack/HomeStack';

import {  BackHandler, StyleSheet } from 'react-native';
import HomeAdminStack from '../Stack/HomeAdminStack';
import { Container, Content, Header, Label, Left } from 'native-base';
import { DrawerRouter } from '@react-navigation/native';
import Test from './Test';



const Drawer = createDrawerNavigator();

export default class MenuDrawerAdmin extends Component {

  constructor(props) {
    super(props);
  }

  

     componentDidMount()
     {
       
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
          });
     }

     render () {
     
    return (
      
       


  

<Drawer.Navigator drawerContent={({navigation})=><Test navigation={navigation}/>} initialRouteName="GestionClient">

     
      <Drawer.Screen name="GestionEntreprise"    component={HomeAdminStack} />
      <Drawer.Screen name="GestionOffer"    component={HomeAdminStack} />
      <Drawer.Screen name="GestionTarif"    component={HomeAdminStack} />
      <Drawer.Screen name="GestionClient"    component={ClientStack} />

      
      
      
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
