import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from "expo-router";

const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={()=>{ router.push("./(tabs)") }}>login</Text>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:"center",
  },
  text:{
    fontSize:40,
  }
})