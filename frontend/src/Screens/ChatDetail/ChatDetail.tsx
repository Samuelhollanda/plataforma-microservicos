import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import estilos from './Style.ChatDetail';

const mensagensPorUsuario: any = {
  '1': [
    { id: '1', texto: 'Bom dia! ', meu: true },
    { id: '2', texto: 'Ainda esta disponivel?', meu: true },
    { id: '3', texto: 'Bom dia!', meu: false },
    { id: '4', texto: 'Esta sim', meu: false },
    { id: '5', texto: 'Qual o valor?', meu: true },
  ],
  '2': [
    { id: '1', texto: 'Fala Josias, beleza?', meu: true },
    { id: '2', texto: 'Tudo tranquilo cara!', meu: false },
  ],
  '3': [
    { id: '1', texto: 'Fala bruno,tem horario disponivel?', meu: true },
    { id: '2', texto: 'Bom dia.', meu: false },
    { id: '3', texto: 'Só a partir das 15', meu: false },
  ]
};

export default function ChatDetail() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const params = route.params || {};
  const id = params.id || '1';
  const nome = params.nome || 'Samuel Oliveira';
  const foto = params.foto || require('../../../assets/images/Sb.jpg');

  const mensagensDaConversa = mensagensPorUsuario[id] || [];

  return (
    <KeyboardAvoidingView
      style={estilos.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={estilos.header}>
        <TouchableOpacity
          style={estilos.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={estilos.textoVoltar}>←</Text>
        </TouchableOpacity>

        <Image source={foto} style={estilos.fotoPerfil} />

        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Text style={estilos.status}>Online agora</Text>
        </View>
      </View>

      <FlatList
        data={mensagensDaConversa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilos.listaMensagens}
        renderItem={({ item }) => (
          <View
            style={[
              estilos.balaoMensagem,
              item.meu ? estilos.minhaMensagem : estilos.mensagemOutro
            ]}
          >
            <Text style={estilos.textoMensagem}>{item.texto}</Text>
          </View>
        )}
      />

      <View style={estilos.areaDigitar}>
        <TextInput style={estilos.input} placeholder="Digite uma mensagem..." placeholderTextColor="#888" />
        <TouchableOpacity style={estilos.botaoEnviar}>
          <Text style={estilos.textoBotao}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}