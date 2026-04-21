import ProductList from "@/src/components/ProductList/ProductList";
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
                <TextInput style={{borderWidth:1}}/>
            </View>
            <View>
                <ProductList />
            </View>
        </View>
    )
}

export default Home;