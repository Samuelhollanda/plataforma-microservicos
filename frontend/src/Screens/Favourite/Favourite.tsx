import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./Style.Favourite";


const Favourite = () => {
    const navigation = useNavigation<any>()

    type Item = {
        id: string;
        name: string;
    }

    const data: Item[] = [];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Favourite</Text>

            <TouchableOpacity

                style={styles.buttonback}
                onPress={() => navigation.back()}>
                <Image
                    source={require("../../../assets/images/Urso.png")}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>
                        There is nothing!
                    </Text>
                )}

            />
        </View>
    );
};

export default Favourite;