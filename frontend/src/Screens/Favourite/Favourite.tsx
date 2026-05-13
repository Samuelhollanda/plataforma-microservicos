import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./Style.Favourite";
import Header from "@/src/components/Header/Header";


const Favourite = () => {

    type Item = {
        id: string;
        name: string;
    }

    const data: Item[] = [];

    return (
        <>
            <Header />
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <Text style={styles.emptyText}>
                                There is nothing!
                            </Text>
                            <Image
                                source={require("../../../assets/images/Urso.png")}
                                style={styles.imageUrso}
                            />
                        </View>
                    )}
                />
            </View>
        </>
    );
};

export default Favourite;