import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View style={styles.container}>
            <Text>{nome}</Text>
            <TextInput
            placeholder = 'Digite seu nome'
            value = {nome}
            onChangeText = {nome => setNome(nome)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1'
    }
})