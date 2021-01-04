import { Header, Container, Content, Item ,Form , Label, Input} from 'native-base';
import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
//import { Button } from 'react-native-elements';



export default class Client extends Component {


    /*constructor(props) {
        super(props);
    
        
    
        this.state = {
            id: '',
            nameLog: '',
            cneLog:'',
            moyenneLog:'',
            resultatLog:'',
        }
      }*/

  render() {
    return (

        
      <Container>
       <Header transparent/>
          
        
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
             </Form>
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
