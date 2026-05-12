import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import estilos from '../../Screens/Chat/Style.Chat';
export default function ListaContatos({ dados }: { dados: any }) {
    
    const navigation = useNavigation<any>();

    const Contato = ({ item }: any) => {
        const imagemCerta =
            typeof item.foto === 'string'
                ? { uri: item.foto }
                : item.foto;

        return (
            <TouchableOpacity 
                style={estilos.itemLista}   
                onPress={() => navigation.navigate('ChatDetail', {})}
            >
                <Image source={imagemCerta} style={estilos.fotoContato} />
                <Text style={estilos.nomeContato}>{item.nome}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={dados}
            renderItem={Contato}
            keyExtractor={(item) => item.id}
        />
    );
}