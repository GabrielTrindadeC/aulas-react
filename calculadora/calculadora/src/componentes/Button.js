import React from 'react'
import {
    StyleSheet, Text, TouchableOpacity, Dimensions,
} from 'react-native'

export default props => {
    const stylesButton = [styles.main]
    if (props.operation) stylesButton.push(styles.operation)
    if (props.twoCollumns) stylesButton.push(styles.twoCollumns)
    if (props.threeCollumns) stylesButton.push(styles.threeCollumns)
    return (
        <TouchableOpacity>
            <Text style= {stylesButton}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        backgroundColor:'#f0f0f0',
        textAlign: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#888'
    },operation: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    twoCollumns: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    threeCollumns: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})