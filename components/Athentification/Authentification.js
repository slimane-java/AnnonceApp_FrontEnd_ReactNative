import React, { Component } from 'react';
import {Text} from 'react-native'
import { StyleSheet} from 'react-native';
import AthentificationService from './AthentificationService';
import { Button,  Left, Body, Right, Container, Content, Item, Form, Label, Input, Footer } from 'native-base';
import { FontAwesome,Entypo,AntDesign } from '@expo/vector-icons'; 
import * as SecureStore from 'expo-secure-store';



export default class Authentification extends Component {


  constructor(props) {
    super(props);
    
    this.state={

      email:'',
      password:''

    }

    this.handleChange=this.handleChange.bind(this);
    this.conecter=this.conecter.bind(this);
  
  }

  handleChange(evt, name) {
    this.setState({ [name]: evt.nativeEvent.text }, () => { console.log(this.state) })


  }


  componentDidMount()
  {
    
  }
  

  async conecter()
  {
/*
  const data ={
    email:this.state.email,
    password:this.state.password
    
  }

  AthentificationService.login(data)
  .then(resp=>{
    
    console.log(resp.data.data);
    SecureStore.setItemAsync('token',JSON.stringify(resp.data.data));
    return this.props.navigation.navigate("ChoisClientAdmin");


    })
  .catch(err=>{
    console.log(err)
  })
*/
  return this.props.navigation.navigate("ChoisClientAdmin");

  }

  

  render() {
    return (
      
      
      <Container>


      
<Content contentContainerStyle={{justifyContent:"center"}}>
    
    <Body style={{ marginLeft:0,marginTop:100}}>
    <Entypo name="emoji-happy" size={50} color="black" />
  <Text  style={{fontSize:25}}>Welcome</Text>
  <Text style={{fontSize:20}}>Sign In for continue</Text>
  </Body>
    
        

            <Form>
          
           <Item floatingLabel  error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Email</Label>
            <Input value={this.state.email} onChange={(evt)=>this.handleChange(evt,"email")} />
           </Item>

           <Item floatingLabel error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Password</Label>
            <Input  value={this.state.password} onChange={(evt)=>this.handleChange(evt,"password")}/>
           </Item>

        
             
             <Button transparent onPress={()=>{this.conecter()}} style={{marginLeft:50,marginTop:20}}>
             <Text style={{color:"#efd0ff",fontSize:20}}>Sign In</Text>
             </Button>
  
            
             
             

            </Form>

          
        
        </Content>  

        <Footer style={{backgroundColor:"#fff"}}>
          
          <Left>
            <Body>
            <Button transparent>
           <AntDesign name="adduser" size={24} onPress={()=>this.props.navigation.navigate("SignUp")} color="black" />
           
           </Button>
            </Body>
          
          </Left>
          <Right>
            <Body>
            <Button transparent onPress={()=>this.props.navigation.navigate('SignIn')}>
            <FontAwesome name="sign-in" size={24} color="black" />
            </Button>
            
            
            </Body>
        
          </Right>
          
        </Footer>

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
