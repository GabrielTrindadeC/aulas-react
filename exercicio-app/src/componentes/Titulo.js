import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <>
            <Text>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})