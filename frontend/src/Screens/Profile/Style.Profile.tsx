import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "green",
        marginBottom: 20,
    },

    profileContainer: {
        alignItems: "center",
        marginBottom: 30,
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },

    button: {
        backgroundColor: "#5a3e3e",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    menu: {
        marginTop: 20,
    },

    menuItem: {
        fontSize: 16,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});