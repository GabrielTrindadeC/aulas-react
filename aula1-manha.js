Primeiro Componente 1
    JSX - maneira de mesclar código html dentro do JavaScript
        quando vamos usar um código JSX, devemos importar o React
        import React from 'react'
        Para renderizar um texto no react native vamos utiliar um componente chamado Text.
        para fazer a importação dele basta colocar: 
            import { Text } from 'react-native'
        
    Criamos uma função chamada App() e retornamos esse componente com seu conteúdo.
    function App() {
        return <Text>Primeiro Componente</Text>
    }

    Agora basta fazer a exportação desse componente no próprio arquivo

    export default App

Primeiro Componente 2
    simplificando o componente
        atribuindo a uma variável
            const App = function () {
                return <Text>Primeiro Componente</Text>
            }

            export default App
    ====================================
        função anonima e exportando direto
            export default function () {
                return <Text>Primeiro Componente</Text>
            }
    ====================================
        usando arrow function
            export default () => {
                return <Text>Primeiro Componente</Text>
            }
    ====================================
    usando arrow function com o return implicito
        export default () => <Text>Primeiro Componente</Text>

Organizando Componentes
    criar uma pasta chamada src na raíz do projeto
    dentro da src, criar a pasta components
    dentro de components criar um arquivo chamado Primeiro.js
        fazer os 2 imports necessários
            import React from 'react'
            import { Text } from 'react-native'
        criar a função que irá retornar o JSX
            export default () => <Text>Primeiro</Text>
        
        no arquivo App.js, fazer a importação do componente que acabamos de criar.
            import Primeiro from './src/components/Primeiro'
        invocar o componente Primeiro dentro da função do componente App:
            export default function App() {
                return (
                    <Primeiro></Primeiro>
                );
            } 
        Caso o componente não possua conteúdo a ser inserido, podemos usar dessa maneira:
            export default function App() {
                return (
                    <Primeiro/>
                );
            }

Sistema de Módulos do ECMAScript
    vamos criar um arquivo chamado Multi.js. Dentro dele vamos criar 3 funções para serem exportadas
        import React from 'react'
        import { Text } from 'react-native'

        export default function () {
            return <Text>Comp Padrão</Text>
        }

        export function Component1() {
            return <Text>Component 1</Text>
        }

        export function Component2() {
            return <Text>Component 2</Text>
        }
    
    em App.js vamos importa-los
        import CompPadrao, {Component1, Component2} from './components/Multi.js

    apesar de não ser uma pratica comum, é possivel colocar mais de um componente por arquivo. Nesse caso criamos 1 componente padrão usando a palavra default e 2 componentes com nomes, sem o uso do default.

Um Pouco de Estilo
    Para adicionar estilos no React Native precisamos fazer o seguinte:
        importar o componente StyleSheet
            import { Text, View, StyleSheet } from 'react-native'
        
        criar uma constante que irá receber esse estilos
        const style = StyleSheet.create({

        })

        usamos a função create que está dentro do componente StyleSheet, nela passamos um objeto que terá o nosso estilo 
        const style = StyleSheet.create({
            App: {
                backgroundColor: '#A00',
                flex: 1
            }
        })

        veja que para escrevermos css dentro de um componente, a sintaxe é similar do JS.

        para aplicarmos esse estilo, podemos inserir dentro do componente, nesse exemplo vamos colocar dentro de uma <View>
        <View style={style.App}>
            ...
        </View>

        para inserir mais de um estilo basta separar por uma virgular:

        const style = StyleSheet.create({
            App: {
                backgroundColor: '#A00',
                flex: 1
            },
            txtG: {
                fontSize: 30,
            },
            txtBranco: {
                color: '#fff'
            }
        })

        Para adicionar mais de um objeto no estilo, devemos colocar em um array
        <View style={style.App}>
            <Text style={[style.txtG, style.txtBranco]}>Iniciando com estilos</Text>
        </View>