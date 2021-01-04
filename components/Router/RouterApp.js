/*import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Platform,View} from 'react-native';
import {Icon,DrawerButton,Text,Button} from 'native-base';
import Authentification from '../Athentification/Authentification';
import Accueil from '../Accueil/Accueil';
import { NativeRouter, Route, Link } from "react-router-native"; // 4.2.0
import { NavigationContainer ,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons'; 
import Menu from '../Menu/Menu';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();



export default class RouterApp extends Component {

  constructor (props) {
    super(props);
  
}




    render()
    {
      
        return (
    
            <NavigationContainer>
        <View style={styles.container}>
        
        
              <Stack.Navigator >
              <Stack.Screen name="Authentification" component={Authentification} />
          
              <Stack.Screen
  name="Menu"
  component={Menu}
  options={({ route,navigation }) => ({
    
    headerLeft: () => (

      <Button transparent onPress={()=>navigation.dispatchDrawerActi(ons.toggleDrawer())}>
            <SimpleLineIcons name="menu" size={24}  />
          </Button>

      ),
      title: route.name
  })
  
  }
/>
              </Stack.Navigator>
              
               
        
              <StatusBar style="auto" />
         </View> 
         
            </NavigationContainer>
            
          );
    }

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
 */