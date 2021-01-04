import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {StyleSheet,Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  Header  from '../Header/Header';
import { Container } from 'native-base';
import Client from '../UsersComponents/Client/Client';


const Stack = createStackNavigator();

export default class AdminStack extends Component {

  constructor (props) {
    super(props);
  
}



 

    render()
    {
      
        return (
    
            
          <Container >

              
<Stack.Navigator >
                  
                  <Stack.Screen
            name="Client"
            component={Client}
            
            options={({ route,navigation }) => ({
        
              headerLeft: () => (
          
                <Header navigation={navigation}/>
          
                ),
                title: route.name
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
  