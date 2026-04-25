import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'red',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        flexDirection: 'row', // Alinha imagem na esquerda e texto na direita
        padding: 12,
        //flexDirection: 'row'
        // Sombras para dar profundidade
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    infoContainer: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#ffffffff',
    },
    card: {
        //backgroundColor: 'green',
        margin: 4,
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    buyButton: {
        backgroundColor: '#28a745',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        alignSelf: 'flex-end', // Joga o botão para a direita
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }



})

export default style;