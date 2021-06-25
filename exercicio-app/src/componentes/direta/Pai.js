import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Filho from './Filho'

export default props => {
    return (
        <View style={styles.container}>
            <Filho a = {10} b={200}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})