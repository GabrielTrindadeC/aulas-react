import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
        if(props.test){
            return props.children
        }else {
            return (false)
        }
}

const styles = StyleSheet.create({
    container: {

    }
})