import React from 'react'
import { Text , View, StyleSheet } from 'react-native'
import Primeiro from './src/Primeiro'
import CompPadrao, {Component1, Component2} from './src/Multi'

export default function App () {
    return (
        console.warn('opa'),
        <View style = {style.App}>
            <Text style = {[style.txtG, style.txtBranco]}>Treinando estilos</Text>
            <CompPadrao/>
            <Component1/>
            <Component2/>
        </View>
    )
}

const style = StyleSheet.create({
    App : {
        flex: 1,
        backgroundColor: '#C1C1C1',
        paddingTop: 20
    },
    txtG : {
        fontSize: 30
    },
    txtBranco: {
        color: '#fff'
    }
})
// export default app
