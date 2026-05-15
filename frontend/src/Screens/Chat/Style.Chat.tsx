import { StyleSheet, Platform, StatusBar } from 'react-native';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    //backgroundColor: 'blue',
  },

  barraSuperior: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    elevation: 3,
    gap: 10,
  },

  topoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'green',
  },

  localizacao: {
    fontSize: 14,
    color: '#555',
  },

  iconesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icone: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },

  conteudo: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },

  itemLista: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },

  fotoContato: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },

  nomeContato: {
    fontSize: 16,
    color: 'black',
  },
});

export default estilos;