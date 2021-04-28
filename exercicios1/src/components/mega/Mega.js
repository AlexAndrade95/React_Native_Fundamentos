import React, { Component } from 'react'
import { Text, TextInput } from 'react-native' 
import estilo from '../estilo'

export default class Mega extends Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: qtde})
    }

    render(){
        return (
            <>
                <Text style={estilo.textG}>
                    Gerador de Mega-Sena 
                    {this.props.qtdeNumeros}
                </Text>
                <TextInput 
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero }
                />
            </>
        )
    }
}