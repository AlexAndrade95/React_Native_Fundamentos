import React from 'react'
import { Text, Platform } from 'react-native'
import estilo from './estilo'

export default _ => {
    if(Platform.OS === 'android') {
        return <Text style={estilo.textG}>Android</Text>
    }else if(Platform.OS === 'ios') {
        return<Text style={estilo.textG}>IOS</Text>
    }else{
        return <Text style={estilo.textG}>Eita!!</Text>
    }    
    
}