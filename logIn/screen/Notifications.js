import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor:'black',
       
    },
   header :{

    textAlign:'center',
    color:'#3cb371',
    fontSize:20,
    fontWeight:'bold',
    
   
   },



})