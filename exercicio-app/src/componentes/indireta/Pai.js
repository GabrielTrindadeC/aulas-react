import React ,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Filho from './Filho'
export default props => {
        const [texto, setTexto] = useState('')
        const [num, setNum]  = useState(0)
        function exibirValor(numero, texto) {
            setNum(numero)
            setTexto(texto)
        }
    return (
        <>
            <Text>
                {texto}{num}
            </Text>
            <Filho funcao={exibirValor}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})