import { Left,Header,Body,Container, Button, Label, Content, Item, Thumbnail } from 'native-base';

import React, { Component } from 'react';
import {  StyleSheet ,Text } from 'react-native';






export default class Test extends Component {


    constructor(props) {
        super(props);

        console.log(props)
       this.ok=this.ok.bind(this);
       this.ok1=this.ok1.bind(this);
      }

     
   ok()
   {
       console.log(this.props.navigation.navigate("GestionEntreprise"));
   }
   ok1()
   {
       console.log(this.props.navigation.navigate("GestionClient"));
   }

    render(){

        return (

          
          

    <Container >

      
    
  

  <Content>
      <Item style={{marginTop:50}}>
      
    <Body>
    
        <Thumbnail large  source={{uri: "http://192.168.100.36:8000/api/getimage/ukGpfI32wvEXCCCflRsQgibb1mh4MhbTcWKrrQhZ.jpeg"}} style={{marginTop:50}} />
    <Text  style={{fontSize:25}}>Welcome</Text>
    </Body>
      </Item>
  
      <Item style={{marginTop:10}}>
            <Button  transparent light onPress={()=>{this.ok()}} ><Label style={{color:"#efd0ff"}}>Gestion Entreprise</Label></Button>
           </Item>
           <Item style={{marginTop:10}}>
           <Button  transparent light onPress={()=>{this.ok1()}} ><Label style={{color:"#efd0ff"}}>Gestion Offer</Label></Button>
   
           </Item>
           <Item style={{marginTop:10}}>
            <Button  transparent light onPress={()=>{this.ok()}} ><Label style={{color:"#efd0ff"}}>Gestion Tarif</Label></Button>
           </Item>
           <Item style={{marginTop:10}}>
           <Button  transparent light onPress={()=>{this.ok1()}} ><Label style={{color:"#efd0ff"}}>Gestion Client</Label></Button>
   
           </Item>
          

  </Content>

  

     
    </Container>

        );
    }


}

const styles = StyleSheet.create({

    loginFormTextInput: {
      width: 250,
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
      width: 250,
      borderRadius: 5,
      height: 40,
      marginTop: 25,
      paddingLeft: 10,
      marginLeft: 17,
      marginRight: 17,
      backgroundColor: 'pink'
  
    },
  
  })

