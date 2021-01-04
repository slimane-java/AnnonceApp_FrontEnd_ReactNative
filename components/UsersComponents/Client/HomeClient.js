import React, { Component } from 'react';
import { Container,Thumbnail,Left,Content,Card,CardItem,Body, Button } from 'native-base';
import {Text,BackHandler} from 'react-native'
import { StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();




export default class HomeClient extends Component {


  constructor(props) {
    super(props);

    

    this.state = {
     
    }
  }

    componentDidMount()
     {
     

        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
          });
     }

  render() {
    
   
    return (
      
        <Container>
           
            <Content padder>
                <Card>
            <CardItem>
              <Left>
                  <Thumbnail source={{uri: 'https://picsum.photos/200/300'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                  <Button onPress={()=>console.log(this.props)}><Text>ok</Text></Button>
                </Body>
              </Left>
           </CardItem>
                </Card> 
        </Content>
      </Container>
      

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
