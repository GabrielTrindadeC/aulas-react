import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default props => {
    if (Platform.OS == 'android'){
        return <Text>Android</Text>
    }else if (Platform.OS == 'ios'){
        return <Text>iOS</Text>
    }else if (Platform.OS == 'web'){
        return <Text>Navegador</Text>
    }
    return (
        <Text>Em que mundo você vive?</Text>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})