import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {StyleSheet,Platform} from 'react-native';
import Authentification from '../Athentification/Authentification';
import { createStackNavigator } from '@react-navigation/stack';
import MenuDrawer from '../Drawer/MenuDrawer';
import { Container } from 'native-base';
import AddEntreprise from '../EntrepriseCompoents/AddEntreprise';
import ChoisClientAdmin from '../UsersComponents/ChoisClientAdmin';
import AddClient from '../UsersComponents/Client/AddClient';
import MenuDrawerAdmin from '../Drawer/MenuDrawerAdmin';



const Stack = createStackNavigator();



export default class AthenStack extends Component {

  constructor (props) {
    super(props);
  
}



 

    render()
    {
      
        return (
    
            
          
        <Container>

<Stack.Navigator >

<Stack.Screen name="SignIn" options={{headerShown:false}} component={Authentification} />
<Stack.Screen name="MenuDrawer"  options={{headerShown:false}} component={MenuDrawer} />
<Stack.Screen name="MenuDrawerAdmin" options={{headerShown:false}} component={MenuDrawerAdmin}/>
<Stack.Screen name="SignUp" options={{headerShown:false}} component={AddClient}/>
<Stack.Screen name="ChoisClientAdmin" options={{headerShown:false}} component={ChoisClientAdmin} />
<Stack.Screen name="AddEntreprise" options={{headerShown:false}} component={AddEntreprise}/>

</Stack.Navigator>



<StatusBar style="auto" />
        </Container>
        
        
            
            
         
           
            
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
  