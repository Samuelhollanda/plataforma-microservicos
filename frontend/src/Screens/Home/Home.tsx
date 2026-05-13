import ProductList from "@/src/components/ProductList/ProductList";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import { useNavigation } from "expo-router";
import { View, Text, Button, TextInput, StyleSheet  } from "react-native";
import style from "./Style.Home";
import Header from "@/src/components/Header/Header";


const Home = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Header />
            <View>
                <Text style={style.title}>     
                    Bem Vindo a Plataforma de Serviços
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