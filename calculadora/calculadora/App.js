import React from 'react'
import {StyleSheet, View} from 'react-native'
import Constants from 'expo-constants'
import Calculator from './src/screens/Calculator'


export default function App () {
  return (
    <View style= {styles.container}>
      <Calculator/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'linear-background(to right, rgb(83,105,118), rgb(41, 46, 73))',
    }
})