import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Settings = () =>
{
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.inputTextBox}>
            <Image source={require('./assets/search_icon.png')}/>
            <TextInput placeholder='Search Settings' placeholderTextColor='black' style={{color:'black'}}></TextInput>
        </View>
        <View>
            <TouchableOpacity>
                <View>
                    <Text style={styles.firstView} onPress={() => navigation.navigate('Profile')}>Account</Text>
                    </View>
                
                <Text style={styles.options}>Notifications</Text>
                <Text style={styles.options}>Appearance</Text>
                <Text style={styles.options}>Privacy & Security</Text>
                <Text style={styles.options}>Help and Support</Text>
                <Text style={styles.options}>About</Text>
                <Text style={styles.options} onPress={() => navigation.navigate('Login')}>Log Out</Text>

            </TouchableOpacity>
        </View>

    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:'black',

      
    },

    inputTextBox : {
      alignItems:'center',
      flexDirection: 'row',
      width: '90%',
      marginTop: 20,
      borderRadius: 20,
      paddingHorizontal: 10,
      backgroundColor:'#fff',
      marginLeft: 20,
      
    },

    options : {
        marginBottom: 30,
        color:'#3cb371',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 70,
        marginTop: 10,
        padding: 5,
        borderBottomWidth: 1,
        //borderBottomColor:'#f5f5dc',

    },
    firstView : {
        marginTop: 30,
         marginBottom: 30,
        color:'#3cb371',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 70,
        padding: 5,
        borderBottomWidth: 1,

    },

})