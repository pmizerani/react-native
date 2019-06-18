import React from 'react';
import {View, Text} from 'react-native';

const fonte = {
    style: {
        fontSize:30
    }
};

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {props.children}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Phelipe' sobrenome={props.sobrenome}>
            <Filho nome='Catingudo'/>
            <Filho nome='Juzé'/>
        </Pai>
        <Pai {...props} nome='Juscelino'>
            <Filho nome='Julesca'/>
            <Filho nome='Cacilda'/>
        </Pai>
    </View>

export default Avo;