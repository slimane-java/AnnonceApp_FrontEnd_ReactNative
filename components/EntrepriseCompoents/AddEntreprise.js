import { Thumbnail,Left,Header,Button,Body,Textarea,Container,Content,Item, Form, Label, Input } from 'native-base';

import React, { Component } from 'react';
import {  StyleSheet ,Text,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import  EntrepriseService  from './EntrepriseService';
import * as SecureStore from 'expo-secure-store';





export default class AddEntreprise extends Component {


    constructor(props) {
        super(props);
    
    
    
        this.state = {
    
          name:'',
          email:'',
          tel:'',
          fix:'',
          secteur:'',
          discription:'',
          photo:'http://192.168.100.36:8000/api/getimage/ukGpfI32wvEXCCCflRsQgibb1mh4MhbTcWKrrQhZ.jpeg',
          adress:'',
          hasPermission:null,
          type:Camera.Constants.Type.back
          
          
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.setHasPermission=this.setHasPermission.bind(this);
        this.setType=this.setType.bind(this);
        this.setHasPermission=this.setHasPermission.bind(this);
        this.AddClient=this.AddClient.bind(this);
        this.setImage=this.setImage.bind(this);
        this.pickImage=this.pickImage.bind(this); 
        this.uploadimage=this.uploadimage.bind(this);
       
      }

      setHasPermission(data)
      {
        this.setState({hasPermission:data},()=>{console.log("ok")})
      }

      setType(data)
      {
        this.setState({Type:data},()=>{console.log("ok")})
      }

      setHasPermission()
      {
         this.setState({hasPermission:false},()=>{console.log(this.state.hasPermission)})
      }
    
    
    
      handleChange(evt, name) {
        this.setState({ [name]: evt.nativeEvent.text }, () => { console.log(this.state) })
    
    
      }
    
      async componentDidMount() {

       console.log("okkkkkkkkkkkkkkkkkkkk")
        
          /*
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
          console.log(status)
          this.setState({ hasPermission: status === 'granted' },()=>console.log(this.state.hasPermission));

          */
         if (Platform.OS !== 'android') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll  permissions to make this work!');
          }
         }
        
       
      }

      setImage(data)
      {
          this.setState({photo:data},()=>console.log("ok"))
          
      }

    /*  setUp()
      {
        this.setImage("file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540slimaeabdo%252Fmyproreact/ImagePicker/cece1621-e51d-4203-b26c-f990deb2e455.jpg");
        
      }*/

      async pickImage() {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          
        });
    
        //console.log(result.uri);
        this.setImage(result.uri)

        if(!result.uri)
        {
          
          //this.uploadimage(result.uri,'TestImage');
         // console.log('okkkk')
     
          

        }

        
    
      
       
      }

     async uploadimage(url,name)
      {
        const resp=await fetch(url);
        const blob=await resp.blob();

        var ref=firebase.storage().ref().child("image/"+name)
        return ref.put(blob);
      }

    
      AddClient()
      {
       /*
        let formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('secteur',this.state.secteur);
        formData.append('tel',this.state.tel);
        formData.append('fix',this.state.fix);
        formData.append('discription',this.state.discription);
        formData.append('adress',this.state.adress);
        formData.append('photo', { uri: this.state.photo, name: this.state.photo.split('/').pop(), type :"image/jpg"});
           
        SecureStore.getItemAsync('token').then(value=>{

          const User=JSON.parse(value);
    
         
          console.log(User);

          EntrepriseService.register(formData,User).then(resp=>{

            console.log(resp);
           
          })

        });

       */
      this.props.navigation.navigate("MenuDrawerAdmin");
      }


    render(){

        return (

          
          

    <Container >

      <Header transparent>
    <Left/>
    <Body>
    <Text  style={{fontSize:25}}>Welcome</Text>
    <Text style={{fontSize:20}}>Sign Up for continue</Text>
    </Body>
  </Header>

  

      <Content contentContainerStyle={{justifyContent:"center"}}>
      <Body style={{ marginLeft:0,marginTop:0}}>
   <Thumbnail large  source={{uri: this.state.photo}} style={{marginTop:50}} />
   <Button transparent onPress={this.pickImage} style={{marginLeft:50}}><MaterialIcons name="insert-photo" size={24} color="black" /></Button>

  
    </Body>
    
            <Form>

            <Item floatingLabel error style={{ height:60,marginRight:50,marginLeft:50,marginTop:10}}>
            <Label>Nom</Label>
            <Input value={this.state.name}  onChange={(evt)=>this.handleChange(evt,'name')} />
            </Item>

           

            <Item floatingLabel error style={{height:60, marginRight:50,marginLeft:50}}>
            <Label>Email</Label>
            <Input value={this.state.email} onChange={(evt)=>this.handleChange(evt,'email')} />
            </Item>

            <Item floatingLabel  error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Tel</Label>
            <Input value={this.state.tel} onChange={(evt)=>this.handleChange(evt,'tel')} />
            </Item>

            <Item floatingLabel error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Fix</Label>
            <Input  value={this.state.fix} onChange={(evt)=>this.handleChange(evt,"fix")} />
            </Item>

            <Item floatingLabel error style={{height:60 ,marginRight:50,marginLeft:50}}>
            <Label>Secteur</Label>
            <Input value={this.state.secteur} onChange={(evt)=>this.handleChange(evt,"secteur")} />
            </Item>

            <Item floatingLabel error style={{height:60 ,marginRight:50,marginLeft:50}}>
            <Label>Adress</Label>
            <Input value={this.state.adress} onChange={(evt)=>this.handleChange(evt,"adress")} />
            </Item>

            <Item style={{height:60 ,marginRight:50,marginLeft:50,marginTop:20}}>
            <Label>Description</Label>
            </Item>
          
            <Textarea rowSpan={5} value={this.state.discription} bordered  style={{marginRight:50,marginLeft:50}} onChange={(evt)=>this.handleChange(evt,'discription')}/>

            <Body>
             <Button transparent style={{marginLeft:50,marginTop:20}} onPress={()=>this.AddClient()}>
             <Text style={{color:"#efd0ff",fontSize:20}}>Ajouter</Text>
             </Button>
            </Body>
            
            </Form>

          
        
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

