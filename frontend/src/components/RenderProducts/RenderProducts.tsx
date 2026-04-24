import { View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import style from "./Style.RenderProducts";
import listProduct from "../../../data/data";

type Product = typeof listProduct[number];

const RenderProducts = ({ item }: { item: Product }) => {
  const navigation = useNavigation<any>()

    return (
        <View style={style.container} >
            <View>
                <Image source={item.photo} style={style.image} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
                style={style.card}
            >
                <Text style={style.title}>{item.title}</Text>
                <Text>Descrição:</Text>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderProducts;