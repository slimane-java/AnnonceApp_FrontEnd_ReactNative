import { Button, Header, Left, Body, Right, Container, Content, Item, Form, Label, Input,  Footer,  Thumbnail} from 'native-base';
import React, { Component } from 'react';
import {  StyleSheet ,Text} from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import ClientService from './ClientService'
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as SecureStore from 'expo-secure-store';





export default class AddClient extends Component {


  constructor(props) {
    super(props);



    this.state = {

      name: '',
      prename: '',
      email: '',
      photo:'http://192.168.100.36:8000/api/getimage/ukGpfI32wvEXCCCflRsQgibb1mh4MhbTcWKrrQhZ.jpeg',
      password: '',
      c_password:'',
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


  setImage(data)
  {
      this.setState({photo:data},()=>console.log("update state",this.state.photo))
      
  }

  async pickImage() {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: false,
      
    });


    
    this.setImage(result.uri)



  }

  async uploadimage()
      {
       
     let formData = new FormData();
     formData.append('photo', { uri: this.state.photo, name: this.state.photo.split('/').pop(), type :"image/jpg"});
      console.log(formData)

       
       ClientService.UploadImage(formData)
       .then(resp=>{

         console.log('resultaUploadAx',resp)
        
         
       })
      
    



      }


  handleChange(evt, name) {
    this.setState({ [name]: evt.nativeEvent.text }, () => { console.log(this.state) })


  }

  async componentDidMount() {

    if (Platform.OS !== 'android') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll  permissions to make this work!');
      }
      else{
        console.log("ok")
      }
     }

  }

  AddClient()
  {

    let formData = new FormData();
    formData.append('name',this.state.name);
    formData.append('prename',this.state.prename);
    formData.append('email',this.state.email);
    formData.append('password',this.state.password);
    formData.append('c_password',this.state.c_password)
    formData.append('photo', { uri: this.state.photo, name: this.state.photo.split('/').pop(), type :"image/jpg"});
       

    ClientService.register(formData)
    .then(resp=>{ 
      SecureStore.setItemAsync('token',JSON.stringify(resp.data.data.token));
      console.log("result Axois add",resp.data.data.token);
      return this.props.navigation.navigate("ChoisClientAdmin");

    })
    

  }






  render() {

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
            <Label>Prenom</Label>
            <Input value={this.state.prename} onChange={(evt)=>this.handleChange(evt,'prename')} />
           </Item>

           <Item floatingLabel  error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Email</Label>
            <Input value={this.state.email} onChange={(evt)=>this.handleChange(evt,'email')} />
           </Item>

           <Item   error style={{ height:60,marginRight:50,marginLeft:50}}>
           <Label>Photo</Label>
           </Item>

           <Item floatingLabel error style={{ height:60,marginRight:50,marginLeft:50}}>
            <Label>Password</Label>
            <Input  value={this.state.password} onChange={(evt)=>this.handleChange(evt,"password")} />
           </Item>

           <Item floatingLabel error style={{height:60 ,marginRight:50,marginLeft:50}}>
            
           <Label>confirmer password</Label>
            <Input value={this.state.c_password} onChange={(evt)=>this.handleChange(evt,"c_password")} />
           </Item>

         

          

         
             
             <Button transparent style={{marginLeft:50,marginTop:20}} onPress={()=>this.AddClient()}>
             <Text style={{color:"#efd0ff",fontSize:20}}>Sign Up</Text>
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
