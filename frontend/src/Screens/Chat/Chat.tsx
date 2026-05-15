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
import Header from '../../components/Header/Header';
import estilos from './Style.Chat';

const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: require('../../../assets/images/Sb.jpg') },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {
    const navigation = useNavigation<any>();

    return (
        <View style={estilos.tela}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={estilos.barraSuperior}>
                <Header />
                <View style={estilos.buscaContainer}>
                    <Text style={estilos.iconeBusca}>🔍</Text>
                    <TextInput
                        placeholder="Procurando por..."
                        style={estilos.inputBusca}
                    />
                </View>
            </View>

            <View style={estilos.conteudo}>
                <FlatList
                    data={numeros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={estilos.itemLista}
                            onPress={() => {
                                navigation.navigate('ChatDetail', {
                                    id: item.id,
                                    nome: item.nome,
                                    foto: item.foto
                                });
                            }}
                        >
                            <Image source={item.foto} style={estilos.fotoContato} />
                            <Text style={estilos.nomeContato}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    );
}