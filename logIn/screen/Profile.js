import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation=useNavigation();
  return (
    <View style={Styles.background}>
    <Text style={Styles.header}>User Profile</Text>
    <View style={Styles.upperBody}>
    <Image style={Styles.image} source={require('./assets/profile2.png')}/>
        <Text></Text>
    </View>

    <View >
    <View> 
        {/* <Text style={Styles.header}>User Profile</Text> */}
        <Text style={Styles.paragraph}>User Name :      Wasim Ansari</Text>
        <Text style={Styles.paragraph}>Email           :      wasim.doodleblue@gmail.com</Text>
        <Text style={Styles.paragraph}>Gender        :      Male</Text>
        <Text style={Styles.paragraph}>Bio               :      😁 </Text>
        
        </View>
     
      
     
      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('Edit')}>EDIT PROFILE</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default Profile;

const Styles =  StyleSheet.create({

  background : {
    flex: 1,
   backgroundColor:'black',
  },

  upperBody : {
    backgroundColor:'#3cb371',
    borderRadius:15,
    marginLeft: 20,
    marginRight: 20,
    borderColor:'#ffe4c4',
    borderWidth:2,
    marginBottom: 30,

  },

header : {

  fontSize: 25,
  textAlign: 'center',
  //padding: 30,
  color:'#3cb371',
  fontWeight:'bold',
  //marginTop:40,
  marginBottom:40,

},

image : {

  marginLeft:100,
  marginTop: 70,
  height:140,
  width:140,
  borderRadius:100,


},


 button : {

    borderColor:'black',
    height:60,
    borderWidth:1,
    marginTop:50,
    marginLeft:70,
    marginRight:70,
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
        fontSize: 17,
        //textAlign:'left',
        //padding:10,
        marginTop:30,
        marginLeft:15,

    },


})