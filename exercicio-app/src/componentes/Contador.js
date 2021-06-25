import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default props => {
    const [numero, setNumero] = useState(props.inicial)
    function inc () {
        setNumero(numero + props.passo)
    }
    function dec () {
        setNumero(numero - props.passo)
    }

    return (
        <View style={styles.container}>
            <Text>{numero}</Text>
            <Button title = '+' onPress= {inc}/>
            <Button title = '-' onPress= {dec}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})