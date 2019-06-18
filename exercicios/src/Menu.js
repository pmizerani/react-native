import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import {Inverter, MegaSena} from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import {Avo} from './components/ComunicacaoDireta';
import {TextoSincronizado} from './components/ComunicacaoIndireta';
import ListaFlex from './components/ListaFlex';
import Flex from './components/Flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex,
        navigationOptions: { title: 'Flex Box' }
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='Phelipe' sobrenome='meu ovo'/>,
        navigationOptions: { title: 'Avô' }
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label='O ano é: ' ano={19}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={0}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Meu texto invertido'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Meu texto invertido'/>
    }
}, { drawerWidth: 300 });