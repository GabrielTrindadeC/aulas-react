import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default props => {
    function rng (){
        return Math.random()
    }
    return (
        <Button
        title = "Gerador de numero Aleatorio"
        onPress = {function() {
            const gerador = rng()
            props.funcao(gerador, 'o valor é:')
        }}
        />
    )
}

const styles = StyleSheet.create({
    container: {

    }
})