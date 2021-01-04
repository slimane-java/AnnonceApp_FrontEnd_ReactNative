
import React from 'react';
import {StyleSheet,Platform,SafeAreaView,AppRegistry} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import AthenStack from './components/Stack/AthenStack';
import MenuDrawer from './components/Drawer/MenuDrawer';
import a from './components/Accueil/Accueil';
import AddEntreprise from './components/EntrepriseCompoents/AddEntreprise';
import MenuDrawerAdmin from './components/Drawer/MenuDrawerAdmin';



export default function App() {

  
 

const Stack = createStackNavigator();
  
  
  return (

    <NavigationContainer>
     
      <AthenStack/>
      
        
    </NavigationContainer>
    
    
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:Platform.OS==="android" ? 20 : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
