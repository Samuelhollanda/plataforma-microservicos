import { FlatList, View, Image, Text, TouchableOpacity } from "react-native"
import listProduct from "@/data/data"
import { useNavigation } from "@react-navigation/native";
import style from "./Style.ProuctlList";


const ProductList = () => {

    const navigation = useNavigation()

    return (
        <View>
            <FlatList 
                data={listProduct}
                renderItem={({ item }) => (
                   <View style={style.container} > 
                    <View>
                        <Image source={ item.photo } style={style.image} />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Text>{ item.title }</Text>
                        <Text>{ item.description }</Text>
                    </TouchableOpacity>
                   </View>
                )}
            />
        </View>
    )
}


export default ProductList;