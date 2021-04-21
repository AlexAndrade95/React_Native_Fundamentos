import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Parimpar from './components/Parimpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2 }  from './components/Multi'
//import Primeiro from './components/Primeiro'


export default () => ( // na linha abaixo usa-se par de chaves {} para usar o javascript
    <SafeAreaView style={style.App}>
        <Parimpar num={3}/>
        {/*} 
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13}/>
        <Contador />
        <Botao />
        <Titulo principal="Cadastro de Produto"
                secundario="Tela de cadastro />
        <MinMax min="3" max="20" />
        <MinMax min="1" max="94" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})