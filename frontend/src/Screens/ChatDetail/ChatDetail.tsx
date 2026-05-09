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
import { useNavigation } from '@react-navigation/native';
import estilos from './Style.ChatDetail';

const mensagens = [
  { id: '1', texto: 'Bom dia! ', meu: true },
  { id: '2', texto: 'Ainda esta disponivel?', meu: true },
  { id: '3', texto: 'Bom dia!', meu: false },
  {id: '4', texto: 'Esta sim', meu: false },
  { id: '5', texto: 'Qual o valor?', meu: true },
];

export default function ChatDetail() {

  const navigation = useNavigation<any>()

  return (
    <KeyboardAvoidingView
      style={estilos.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={estilos.header}>

  <TouchableOpacity
    style={estilos.botaoVoltar}
    onPress={() => navigation.back()}
  >
    <Text style={estilos.textoVoltar}>←</Text>
  </TouchableOpacity>

  <Image
    source={require('../../../assets/images/Sb.jpg')}
    style={estilos.fotoPerfil}
  />

  <View>
    <Text style={estilos.nome}>Samuel Oliveira</Text>
    <Text style={estilos.status}>Online agora</Text>
  </View>

</View>
      

      <FlatList
        data={mensagens}
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
        <TextInput
          style={estilos.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={estilos.botaoEnviar}>
          <Text style={estilos.textoBotao}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
