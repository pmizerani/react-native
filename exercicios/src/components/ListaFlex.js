import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
    { id: 1, nome: 'João 1', nota: 1.9 },
    { id: 2, nome: 'João 2', nota: 2.9 },
    { id: 3, nome: 'João 3', nota: 3.9 },
    { id: 4, nome: 'João 4', nota: 4.9 },
    { id: 5, nome: 'João 5', nota: 5.9 },
    { id: 6, nome: 'João 6', nota: 6.9 },
    { id: 7, nome: 'João 7', nota: 7.9 },
    { id: 8, nome: 'João 8', nota: 8.9 },
    { id: 9, nome: 'João 9', nota: 9.9 },
    { id: 10, nome: 'João 10', nota: 10 },
    { id: 11, nome: 'João 11', nota: 9.9 },
    { id: 12, nome: 'João 12', nota: 8.9 },
    { id: 13, nome: 'João 13', nota: 7.9 },
    { id: 14, nome: 'João 14', nota: 6.9 },
    { id: 15, nome: 'João 15', nota: 5.9 },
    { id: 16, nome: 'João 16', nota: 4.9 },
    { id: 17, nome: 'João 17', nota: 3.9 },
    { id: 18, nome: 'João 18', nota: 2.9 },
    { id: 19, nome: 'João 19', nota: 1.9 },
    { id: 20, nome: 'João 20', nota: 0.9 },
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    // justifyContent: 'center', //flex-start - flex-end - space-between - space-around,
    alignItems: 'center', //flex-start - flex-end
    flexDirection: 'row',
    justifyContent: 'space-between'

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}