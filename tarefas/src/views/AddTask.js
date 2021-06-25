import React, { Component } from 'react'
import { 
    View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity,
    TextInput, Platform
} from 'react-native'
import { DateTimePicker } from '@react-native-community/datetimepicker'
import moment from 'moment'


import commonStyles from '../commonStyles'


const initialState = {
    desc: '',
    date: new Date,
    showDatePicker: false

}
export default class AddTask extends Component {

    state = {...initialState}

    render() {
        return (
            <Modal 
            transparent={true} 
            visible={this.props.isVisible}
            animationType='slide'>
                <TouchableWithoutFeedback>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput placeholder= 'informe a descrição'
                    style={styles.input}
                    value= {this.state.desc}
                    onChangeText={desc => this.setState({desc})}/>
                    <View>
                        <TouchableOpacity>
                            <Text  style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    background: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    header:{
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 20,
        fontSize: 18
    },
    input: {
        height: 40,

    }
})