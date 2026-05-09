
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import ChatDetail from '../ChatDetail/ChatDetail';

import estilos from './Style.Chat';

const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: require('../../../assets/images/Sb.jpg') },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {

    const navigation = useNavigation<any>();


    const Contato = ({ item }: any) => {
        const imagemCerta =
            typeof item.foto === 'string'
                ? { uri: item.foto }
                : item.foto;

        return (
            <TouchableOpacity 
            style={estilos.itemLista}   
            onPress={() => navigation.navigate('ChatDetail')}>
                <Image source={imagemCerta} style={estilos.fotoContato} />
                <Text style={estilos.nomeContato}>{item.nome}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={estilos.tela}>

            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={estilos.barraSuperior}>
                <View style={estilos.topoLinha}>
                    <Text style={estilos.logo}>PMM</Text>
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