import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function index() {
  return (
    <View style={styles.container}>
<Stack.Screen options ={{title:'Day 2 :Onboarding'}}></Stack.Screen>
    <Link href={"/day2/onboarding" } asChild>
    <Pressable style={styles.button} android_disableSound={true}>
      <Text style={styles.text}>Go Onboarding -⩥</Text>
    </Pressable>
    </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end',
    backgroundColor:'gray',
    padding:20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})