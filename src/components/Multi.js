import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function () { //o nome nao importa por que é uma funcao default
    return <Text style={Estilo.textG}>Comp #Oficial</Text>
}

 function Comp1() {
    return <Text style={Estilo.textG}>Comp #01</Text>
}

 function Comp2() { //o nome importa por que não é uma funcao default
    return <Text style={Estilo.textG}>Comp #02</Text>
}

export { Comp1, Comp2 }