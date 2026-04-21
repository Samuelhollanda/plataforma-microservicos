import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5
    }
})

export default style;