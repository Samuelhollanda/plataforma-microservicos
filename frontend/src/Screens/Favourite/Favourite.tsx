import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./Style.Favourite";
import Header from "@/src/components/Header/Header";


const Favourite = () => {
    const navigation = useNavigation<any>()

    type Item = {
        id: string;
        name: string;
    }

    const data: Item[] = [];

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.titulo}>Favourite</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )}
                    ListEmptyComponent={() => (
                        <>
                            <Text style={styles.emptyText}>
                                There is nothing!
                            </Text>
                            <Image
                                source={require("../../../assets/images/Urso.png")}
                                style={{ width: 30, height: 30 }}
                            />
                        </>
                    )}
                />
            </View>
        </>
    );
};

export default Favourite;