import ProductList from "@/src/components/ProductList/ProductList";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import { useNavigation } from "expo-router";
import { View, Text, Button, TextInput } from "react-native";

const Home = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>
                    Bem Vindo!
                </Text>
            </View>
            <View>
                <SearchBar />
            </View>
            <View>
                <ProductList />
            </View>
        </View>
    )
}

export default Home;