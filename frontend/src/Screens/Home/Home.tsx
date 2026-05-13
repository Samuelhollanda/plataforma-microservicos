import ProductList from "@/src/components/ProductList/ProductList";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import { useNavigation } from "expo-router";
import { View, Text, ScrollView } from "react-native";
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
            <ScrollView>
                <SearchBar />
                <ProductList />
            </ScrollView>
        </View>
    )
}

export default Home;