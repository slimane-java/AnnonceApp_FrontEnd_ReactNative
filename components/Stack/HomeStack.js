import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {StyleSheet,Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from '../Accueil/Accueil';
import Header from '../Header/Header'
import {  Container, Text } from 'native-base';



const Stack = createStackNavigator();



export default class HomeStack extends Component {

  constructor (props) {
    super(props);
  
}



 

    render()
    {
      
        return (
    
           
      
        
        
              
        
         
         <Container >
           
           <Stack.Navigator >
                  
                  <Stack.Screen name="Accueil" component={Accueil}  options={({navigation }) => ({
        
        headerLeft: () => (
    
          <Header  navigation={navigation} /> 
            
    
          ),
        
          
          
      })
      
      }
    />
              
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
  