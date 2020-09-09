/*This is an example to Make Phone Call, Send SMS or Email Using React Native Communication*/
import React, {Component} from 'react';
//import React
 1
import { TextInput } from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//import Basic React Components
 
import Communications from 'react-native-communications';
// either import the whole module and call as Communications.phonecall('0123456789', true)
// or can import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { phonecall('0123456789', true) }}
 
export default class App extends Component{
constructor(props) {
   super(props);
   this.state = {
     telefono: '',
     emails:''
   };
 }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingStyle}>Ejemplo de  React Native Communication</Text>
        
       <Text style={{color: 'red'}}>Teléfono</Text>
       <TextInput
         value={this.state.telefono}
         onChangeText={(telefono) => this.setState({ telefono })}
         placeholder={'Escribe el telefono a marcar y para mandar SMS'}
         style={styles.input}
         keyboardType={'numeric'}
       />
       <Text style={{color: 'green'}}>Correos</Text>
       <TextInput
         value={this.state.emails}
         onChangeText={(emails) => this.setState({  emails  })}
         placeholder={'Escribe correos'}
         style={styles.input}
    
       />
 
        {/*To make a phone call phonecall(phoneNumber, prompt) */}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.phonecall(this.state.telefono, true)}>
            <Text style={styles.text}>
              Realizar llamada telefónica
            </Text>
        </TouchableOpacity>
 
        {/*To send the mail function(to, cc, bcc, subject, body)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.email(this.state.emails.split(',') ,null,null,'Demo Subject','Demo Content for the mail')}>
          {/*email(to, cc, bcc, subject, body)*/}
            <Text style={styles.text}>
              Enviar Correo
            </Text>
        </TouchableOpacity>
 
        {/*To send the text message function(phoneNumber = null, body = null)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.text(this.state.telefono, 'Demo SMS desde REact native')}>
            <Text style={styles.text}>
              Send a Text/iMessage
            </Text>
        </TouchableOpacity>
 
        {/*To open a web URL function(address = null)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.web('https://www.anahuac.mx')}>
            <Text style={styles.text}>
             Abrir www.anahuac.mx
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253,253,253)',
    padding: 12,
  },
  headingStyle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 30,
  },
  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor:"#307cae",
    marginTop : 20,
  },
  text: {
    fontSize: 18,
    textAlign : 'left',
    padding : 10,
    color : '#ffffff',
  },
  input: {
    fontSize: 12,
    textAlign : 'left',
    padding : 10,
    color : '#000',
  },
   
});