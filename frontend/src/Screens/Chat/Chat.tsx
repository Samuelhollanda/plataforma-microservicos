import React from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';

import ListaContatos from '../../components/ListaContatos/ListaContatos';
import estilos from './Style.Chat';

const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: require('../../../assets/images/Sb.jpg') },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {
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
                        placeholder="Procurando por..."
                        style={estilos.inputBusca}
                    />
                </View>
            </View>

            <View style={estilos.conteudo}>
                {                        }
                <ListaContatos dados={numeros} />
            </View>

        </View>
    );
}