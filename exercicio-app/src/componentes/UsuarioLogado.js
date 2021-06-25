import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <View style={styles.container}>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text>Usuário Logado</Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})