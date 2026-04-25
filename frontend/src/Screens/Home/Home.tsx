import ProductList from "@/src/components/ProductList/ProductList";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import { useNavigation } from "expo-router";
import { View, Text, Button, TextInput, StyleSheet  } from "react-native";
import style from "./Style.Home";


const Home = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text style={style.title}>     
                    Bem Vindo a Plataforma de Serviços
                </Text>
            </View>
            <View>
                <SearchBar />
            </View>
            <View>
                <Text>
                    Ultimos Serviços, bruno 
                </Text>
            </View>
            <View>
                <ProductList />
            </View>
        </View>
    )
}

export default Home;