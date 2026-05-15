import React from 'react';
import { 
  StatusBar, 
  Text, 
  TextInput, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import ListaContatos from '../../components/ListaContatos/ListaContatos';
import { useNavigation } from '@react-navigation/native';
import estilos from './Style.Chat';
import SearchBar from '@/src/components/SearchBar/SearchBar';
const numeros = [
    { id: '1', nome: 'Samuel Oliveira', foto: { uri: 'https://placehold.co/600x600'} },
    { id: '2', nome: 'Josias Lima', foto: require('../../../assets/images/jg.jpg') },
    { id: '3', nome: 'Bruno Emanuel', foto: require('../../../assets/images/br.jpg') },
];

export default function Chat() {
    const navigation = useNavigation<any>();

    return (
        <View style={estilos.tela}>
                            <Header />
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={estilos.barraSuperior}>
                <SearchBar />
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