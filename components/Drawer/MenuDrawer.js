import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientStack from '../Stack/ClientStack';
import HomeStack from '../Stack/HomeStack';

import {  BackHandler, StyleSheet } from 'react-native';



const Drawer = createDrawerNavigator();

export default class MenuDrawer extends Component {


     componentDidMount()
     {
       
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
          });
     }

     render () {
     
    return (
      
       



<Drawer.Navigator >
  
      <Drawer.Screen name="HomeStack"    component={HomeStack} />
      <Drawer.Screen name="ClientStack" component={ClientStack} />
      
      
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
