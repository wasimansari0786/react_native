import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const EditProfile = () => {
    const navigation=useNavigation();
  return (
    <ScrollView style={Styles.background}>
    <Text style={Styles.header}>User Profile</Text>
    <View style={Styles.upperBody}>
    <Image style={Styles.image} source={require('./assets/profile2.png')}/>
        <Text></Text>
    </View>

    <View >
    <View> 
        {/* <Text style={Styles.header}>User Profile</Text> */}
        <TextInput style={Styles.paragraph}>User Name :      Wasim Ansari</TextInput>
        <TextInput style={Styles.paragraph}>Email           :      wasim.doodleblue@gmail.com</TextInput>
        <TextInput style={Styles.paragraph}>Gender        :      Male</TextInput>
        <TextInput style={Styles.paragraph}>Bio               :      😁 </TextInput>
        
        </View>
     
      
     
      <TouchableOpacity>
        <Text style={Styles.button} onPress={()=> navigation.navigate('')}>SAVE</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};
export default EditProfile;

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