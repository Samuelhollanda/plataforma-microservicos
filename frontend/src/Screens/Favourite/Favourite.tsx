import { useNavigation } from "expo-router";
import { View, Text, Button, FlatList, TouchableOpacity, Image} from "react-native";
import { styles   } from "./Style.Favourite";

const Favourite = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Favourite</Text>
            <TouchableOpacity
            style={styles.buttonback}
            onPress={() => navigation.goBack()}
            >
                <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            <FlatList 
                data={[]} // Seus dados
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>Exemplo</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Favourite;