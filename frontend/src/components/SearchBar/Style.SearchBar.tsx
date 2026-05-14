import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    buscaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        marginHorizontal: 10
    },

    iconeBusca: {
        marginRight: 5,
    },

    inputBusca: {
        flex: 1,
    }
});

export default styles;