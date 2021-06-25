import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default props => {
    function cadastrar () {
        console.warn ('cadastrou')
    }
    return (
       <Button 
       title = 'Cadastrar'
       onPress = {cadastrar}
       />
    )
}

const styles = StyleSheet.create({
    container: {

    }
})