import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

    botaoVoltar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  textoVoltar: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  fotoPerfil: {
  width: 45,
  height: 45,
  borderRadius: 25,
  marginRight: 12,
},

  header: {
    backgroundColor: 'white',
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  status: {
    fontSize: 13,
    color: 'green',
    marginTop: 3,
  },

  listaMensagens: {
    padding: 15,
    paddingBottom: 20,
  },

  balaoMensagem: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
  },

  minhaMensagem: {
    backgroundColor: '#1591EA',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 3,
  },

  mensagemOutro: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 3,
  },

  textoMensagem: {
    fontSize: 15,
    color: '#222',
  },

  areaDigitar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
  },

  botaoEnviar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#1591EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default estilos;