import { Button, Container,Content} from 'native-base';
import React, { Component } from 'react';
import { Text, View ,StyleSheet,Alert,TextInput} from 'react-native';
//import { Button } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons'; 



export default class Header extends Component {


  constructor (props) {
    super(props);
    navigation=this.props.navigation;
    
    
  
}

  render() {
    return (

        <Container >
          
            <Content>
    <Button transparent  light onPress={()=>navigation.toggleDrawer()}><SimpleLineIcons name="menu" size={25}  /></Button>
   
            </Content>
        </Container>
      
            
    
    );
  }
}


