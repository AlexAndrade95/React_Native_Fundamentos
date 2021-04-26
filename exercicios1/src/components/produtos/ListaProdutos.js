import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

import produtos from './produtos' 

export default props => {
    return (
        <>
            <Text style={estilo.textG}>
                Lista de produtos
            </Text>
            {produtos.map(p => {
                return <Text key={p.id}>{p.id}) {p.nome} tem preço R$ {p.preco}</Text>
            })}
        </>
    )
}