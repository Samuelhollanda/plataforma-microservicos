import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:  '#FC7A7A'
    }, 
    titulo: {
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10,
    },
    buttonback:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    textButton: {
        fontWeight: 'bold', 
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,

    }, 
    text: {
        fontSize: 16, 
    },
    imageUrso: {
        width: 150,
        height: 150,
        marginBottom: 15,
    },
    emptyText: {
        fontSize: 18, 
        color: '#333',
        fontWeight: 'bold',
    },
    listEmpty: {
        marginTop: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    });