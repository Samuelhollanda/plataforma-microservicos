import { View, TextInput, Text } from "react-native"
import styles from "./Style.SearchBar";




const SearchBar = () => {
    return (
        <View style={styles.buscaContainer}>
            <Text style={styles.iconeBusca}>🔍</Text>
            <TextInput
                placeholder="Procurando por..."
                style={styles.inputBusca}
            />
        </View>
    )

}

export default SearchBar;