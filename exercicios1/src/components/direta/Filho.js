import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <>
        <Text style={estilo.textG}>{props.a}</Text>
        <Text style={estilo.textG}>{props.b}</Text>
        </>
    )
}