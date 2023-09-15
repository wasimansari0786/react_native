import React from 'react';
import {StyleSheet, Text, TextInput, Image, ImageBackground, TouchableOpacity, View, ScrollView} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const LoginLayout = () => {

   const navigation=useNavigation();

  return (
   

    <ScrollView style={Styles.background}>
      <Image style={Styles.image} source={require('./assets/logo.png')}/>
      <Text style={Styles.heading}>Welcome back!</Text>
      <TextInput placeholder='User Name' placeholderTextColor='black' style ={Styles.border}></TextInput>
      <TextInput placeholder='password' placeholderTextColor='black' style ={Styles.border}></TextInput>
      <Text style={Styles.forgotpassword} onPress={()=> navigation.navigate('PasswordChange')}>Forot your password?</Text>

      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('Homepage')}>LOGIN</Text>
        </TouchableOpacity>    

        <Text style = {Styles.signup}>Don't have an account? 
        <Text style={Styles.signuplink} onPress={()=> navigation.navigate('Signup')}> Sign up</Text>
        </Text>
    </ScrollView>
  );
};
export default LoginLayout;


const Styles =  StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: 'center',
    //padding: 30,
    color:'#3cb371',
    fontWeight:'bold',
    marginTop:40,

  },

  background : {
    flex: 1,
   backgroundColor:'black',

  },

  border : {
  borderColor:'white',
  height: 60,
  borderWidth: 2,
  backgroundColor:'#fff0f5',
  marginLeft:50,
  marginRight:50,
  textAlign:'left',
  color:'black',
  marginTop:30,
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
    borderColor:'#ffe4c4',
    borderWidth:1,

  },

  image : {

    marginLeft:130,
    marginTop: 80,
    height:140,
    width:140,
     
    
  },

  forgotpassword : {

    textAlign:'right',
    padding:10,
    marginRight: 40,
    color:'#3cb371',
    
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