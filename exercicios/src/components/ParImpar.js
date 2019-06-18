import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

function parOuimpar(num) {
    const resultado = num%2==0 ? "Par" : "Impar";
    return <Text style={Padrao.ex}>{resultado}</Text>
}

export default (props) =>
    <View>
        {parOuimpar(props.numero)}
    </View>