import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListaProdutos from './src/componentes/produtos/ListaProdutos'
import ListaProdutos2 from './src/componentes/produtos/ListaProdutos2'
import DigiteSeuNome from './src/DigiteSeuNome'
export default props => {
    return (
        <View style={styles.container}>
            <ListaProdutos/>
            <ListaProdutos2/>
            <DigiteSeuNome/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
