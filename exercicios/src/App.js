import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import {Inverter, MegaSena} from './components/Multi';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto='Aplicativo' />
                <ParImpar numero={30} />
                <Inverter texto='meu piru' />
                <MegaSena numeros={6}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSize: 40
    }
})