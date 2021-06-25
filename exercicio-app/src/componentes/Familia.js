import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text>[Início] Membros da Família:</Text>
                {props.children}
            <Text>[Fim] Membros da Família</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})