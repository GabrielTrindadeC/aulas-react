import React, {Component } from 'react'
import {
    StyleSheet, View, Text
} from 'react-native'

export default props => {
    return(
        <View style = {styles.display}>
            <Text style = {styles.displayValue}>
                {props.value}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'

    }
})