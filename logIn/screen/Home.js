import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation=useNavigation();
  return (
    <View style={Styles.background}>
        <Image style={Styles.image} source={require('./assets/logo2.png')}/>
      <Text style={Styles.header}>Home Page</Text>

      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('Login') }>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('Signup')}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

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
  marginTop:50,

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
    borderColor:'#ffe4c4',
    borderWidth:1,

  },


})