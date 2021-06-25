import produtos from "./produtos";
import React from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>{p.id} {p.nome} R${p.preco}</Text>
    }
    return (
        <>
            <Text>
                Lista de produtos com Flat list
            </Text>
            <FlatList 
            data = {produtos}
            keyExtractor = {i => `${i.id}`}
            renderItem = {produtoRender}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})