import React from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    TextInput,
    StatusBar
} from 'react-native';
import { useNavigation } from "expo-router";

import estilos from './Style.Chat';

const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: require('../../../assets/images/Sb.jpg') },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {

    const navigation = useNavigation();


    const Contato = ({ item }: any) => {
        const imagemCerta =
            typeof item.foto === 'string'
                ? { uri: item.foto }
                : item.foto;

        return (
            <View style={estilos.itemLista}>
                <Image source={imagemCerta} style={estilos.fotoContato} />
                <Text style={estilos.nomeContato}>{item.nome}</Text>
            </View>
        );
    };

    return (
        <View style={estilos.tela}>

            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={estilos.barraSuperior}>
                <View style={estilos.topoLinha}>
                    <Text style={estilos.logo}>OLX</Text>
                    <Text style={estilos.localizacao}>Teresina, Piauí</Text>
                </View>

                <View style={estilos.buscaContainer}>
                    <Text style={estilos.iconeBusca}>🔍</Text>
                    <TextInput
                        placeholder="Digite um nome"
                        style={estilos.inputBusca}
                    />
                </View>
            </View>

            <View style={estilos.conteudo}>
                <FlatList
                    data={numeros}
                    renderItem={Contato}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    );
}