import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskList from './src/views/TaskList'
import { StatusBar } from 'expo-status-bar'
export default props => {
    return (
        <>
        <TaskList/>
        <StatusBar style='light'/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
