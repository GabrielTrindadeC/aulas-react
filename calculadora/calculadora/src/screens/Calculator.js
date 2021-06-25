import Display from '../componentes/Display'
import Button from '../componentes/Button'
import React,{ Component } from 'react'
import {
    StyleSheet, View, Alert
} from 'react-native'


export default class Calculator extends Component{

    render() {
        return (
            <View style= {styles.container}>
                <Display value= "0"/>
                <View style = {styles.buttons}>
                    <Button label='AC'threeCollumns/>
                    <Button label='/' operation/>
                    <Button label='7'/>
                    <Button label='8'/>
                    <Button label='9'/>
                    <Button label='*'operation/>
                    <Button label='4'/>
                    <Button label='5'/>
                    <Button label='6'/>
                    <Button label='-'operation/>
                    <Button label='1'/>
                    <Button label='2'/>
                    <Button label='3'/>
                    <Button label='+'operation/>
                    <Button label='0' twoCollumns/>
                    <Button label='.'/>
                    <Button label='='operation/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
                
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

})





