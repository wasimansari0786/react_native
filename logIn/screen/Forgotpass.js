import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Forgotpass = () => {
    const navigation=useNavigation();
  return (
    <View style={Styles.background}>
        <Image style={Styles.image} source={require('./assets/logo2.png')}/>
      <Text style={Styles.header}>Restore Password</Text>

      <Text style={Styles.paragraph}>Enter your Email address to receive reset link</Text>

      <TextInput placeholder='Email' placeholderTextColor='black' style ={Styles.border}></TextInput>

      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('OneTimePassword')}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Forgotpass;

const Styles =  StyleSheet.create({

  background : {
    flex: 1,
   backgroundColor:'black',
  },

header : {

  fontSize: 25,
  textAlign: 'center',
  //padding: 30,
  color:'#3cb371',
  fontWeight:'bold',
  marginTop:40,

},

image : {

  marginLeft:120,
  marginTop: 100,
  height:150,
  width:150,

},


 button : {

    borderColor:'black',
    height:60,
    borderWidth:1,
    marginTop:40,
    marginLeft:50,
    marginRight:50,
    textAlign:'center',
    backgroundColor:'#3cb371',
    color:'black',
    fontWeight:'bold',
    padding:15,
    borderRadius:10,
    fontSize:20,

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

    paragraph : {
        fontSize: 20,
        textAlign:'center',
        //padding:10,
        marginTop:30,

    },


})