import React from 'react';
import {StyleSheet, Text, TextInput, Image, ImageBackground, TouchableOpacity, View, ScrollView} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation=useNavigation();
  return (
    <ScrollView style={Styles.background}>
       <Image style={Styles.image} source={require('./assets/logo.png')}/>
      <Text style={Styles.heading}>Create Account</Text>
      <TextInput placeholder='Name' placeholderTextColor='black' style ={Styles.border}></TextInput>
      <TextInput placeholder='Email' placeholderTextColor='black' style ={Styles.border}></TextInput>
      <TextInput placeholder='password' placeholderTextColor='black' style ={Styles.border}></TextInput>
      <TextInput placeholder=' Confirm password' placeholderTextColor='black' style ={Styles.border}></TextInput>

      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('Homepage')}>SIGN UP</Text>
        </TouchableOpacity>    

        <Text style = {Styles.signup}>Alredy have an account? 
        <Text style={Styles.signuplink} onPress={()=> navigation.navigate('Login')}> Login</Text>
        </Text>

    </ScrollView>
  );
};
export default Signup;


const Styles =  StyleSheet.create({

  heading: {
    fontSize: 25,
    textAlign: 'center',
    //padding: 30,
    color:'#3cb371',
    fontWeight:'bold',
    marginTop:30,
    marginBottom:20,
   
  },

  background : {
    flex: 1,
   backgroundColor:'black',

   

  },

  border : {
  borderColor:'white',
  height: 60,
  borderWidth: 1,
  backgroundColor:'#fff0f5',
  marginLeft:50,
  marginRight:50,
  textAlign:'left',
  color:'black',
  marginTop:20,
  padding:10,
  borderRadius:10,
  
  },

  button : {

    borderColor:'black',
    height:40,
    borderWidth:1,
    marginTop:30,
    marginLeft:120,
    marginRight:120,
    textAlign:'center',
    backgroundColor:'#3cb371',
    color:'black',
    fontWeight:'bold',
    padding:10,
    borderRadius:10,

  },

  image : {

    marginLeft:135,
    marginTop: 40,
    height:120,
    width:120,
     
    
  },

  
  signup : {

    textAlign:'center',
    fontSize: 17,
    padding:20,
    marginRight: 40,
    marginLeft:40,
    //marginTop: 20,

  },
  signuplink :
  {
    color: '#3cb371',
    fontSize: 20,

  }

})