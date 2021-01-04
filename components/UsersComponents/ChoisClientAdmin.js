import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native'
import { StyleSheet,BackHandler} from 'react-native';
import { Card, CardItem,  Left, Body, Container, Content,  Label } from 'native-base';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import AdminService from './Admin/AdminService';




export default class ChoisClientAdmin extends Component {


  constructor(props) {
    super(props);
    
    this.state={

      email:'',
      password:''

    }

    this.handleChange=this.handleChange.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.AddAdmin=this.AddAdmin.bind(this);
  
  }

   
       

    


  handleChange(evt, name) {
    this.setState({ [name]: evt.nativeEvent.text }, () => { console.log(this.state) })


  }

 

  componentDidMount()
  {
    BackHandler.addEventListener('hardwareBackPress', function() {
      return true;
    });
  }
  

  AddAdmin()
  {

     /*  
    SecureStore.getItemAsync('token').then(value=>{

      const User=JSON.parse(value);

     

      AdminService.register(User).then(resp=>{
               
        this.props.navigation.navigate("AddEntreprise");

      })
      
      
    });

    */
    return this.props.navigation.navigate("AddEntreprise");

  }
  
  AddClient()
  {
    this.props.navigation.navigate("MenuDrawer");
  }
  

  render() {
    return (

     
      
       
    
        <Container >
          
          
             <Content contentContainerStyle={{justifyContent:"space-around"}}>

          <Label style={{alignSelf:'center',marginTop:50,width:200}}>
          <Text  style={{fontWeight:'bold',fontSize:30}}>Choisir Type User</Text>
          </Label>
         
          
            <TouchableOpacity onPress={()=>this.AddAdmin() }>
            <Card style={{alignSelf:'center',marginTop:100,height:150,width:300}}>
            <CardItem>
              <Left>
              
              <MaterialIcons name="business" size={100} color="black" />
                
              </Left>
              <Body>
              
              <Label style={{alignSelf:'center',marginTop:50,width:200}}>
                <Text  style={{fontWeight:'bold',fontSize:30}}>Business</Text>
              </Label>
             
              </Body>
            </CardItem>
           
          </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.AddClient()}>
            
          <Card  style={{alignSelf:'center',marginTop:100,height:150,width:300}}>
            <CardItem style={{justifyContent:'center'}}>
              <Left>
              <AntDesign name="user" size={100} color="black" />
              </Left>
              <Body>
              
              <Label style={{alignSelf:'center',marginTop:50,width:200}}>
                <Text  style={{fontWeight:'bold',fontSize:30}}>Client</Text>
              </Label>
              
              </Body>
          
            </CardItem>
          </Card>

            </TouchableOpacity>



             </Content>

{
  /*

        <Content>
     
        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label>Password</Label>
            <Input />
            
          </Item>
         
          <Button title="title" block onPress={()=>this.props.navigation.navigate('MenuDrawer')}>
          <Text>Connecter</Text>
          </Button>
          
        </Form>
      </Content>
*/}
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
