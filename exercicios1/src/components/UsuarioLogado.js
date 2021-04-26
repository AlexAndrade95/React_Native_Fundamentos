import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.textG}> Usuário Logado: </Text>
                <Text style={estilo.textG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}