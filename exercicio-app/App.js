import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MinMax from './src/componentes/MinMax'
import Titulo from './src/componentes/Titulo'
import Botao from './src/componentes/Botao'
import Contador from './src/componentes/Contador'
// import Pai from './src/componentes/direta/Pai'
import OutroPai from './src/componentes/indireta/Pai'
import Diferenciar from './src/componentes/Diferenciar'
import Familia from './src/componentes/Familia'
import Membro from './src/componentes/Membro'
import UsuarioLogado from './src/componentes/UsuarioLogado'
export default () => {
    return (
        <View style={styles.container}>
          <MinMax min = {2} max ={10}/>
          <MinMax min = '2' max = '10'/>
          <Text>----------------------------------------</Text>
          <Titulo principal = 'Olá' secundario = 'Tudo bem?' /> 
          <Text>----------------------------------------</Text>
          <Botao/>
          <Text>----------------------------------------</Text>
          <Contador inicial = {10} passo= {2}/>
          <Text>----------------------------------------</Text>
          {/* <Pai/> */}
          <Text>----------------------------------------</Text>
          <OutroPai/>
          <Text>----------------------------------------</Text>
          <Diferenciar/>
          <Text>----------------------------------------</Text>
          <Familia>
            <Membro nome='ana' sobrenome = 'Silva' />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
          </Familia>
          <Text>----------------------------------------</Text>
          <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }}/>
          <UsuarioLogado usuario={{ nome: 'Ana' }}/>
          <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }}/>
          <UsuarioLogado usuario={null}/>
          <UsuarioLogado usuario={{}}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      
    }
})