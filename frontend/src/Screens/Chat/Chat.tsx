import React from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';
import Header from '@/src/components/Header/Header';
import ListaContatos from '../../components/ListaContatos/ListaContatos';
import estilos from './Style.Chat';
import SearchBar from '@/src/components/SearchBar/SearchBar';
const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: { uri: 'https://placehold.co/600x600'} },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {
    return (
        <View style={estilos.tela}>
                            <Header />
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={estilos.barraSuperior}>
                <SearchBar />
            </View>

            <View style={estilos.conteudo}>
                <ListaContatos dados={numeros} />
            </View>

        </View>
    );
}