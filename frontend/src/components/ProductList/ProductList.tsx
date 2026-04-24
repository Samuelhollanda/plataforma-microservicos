import { FlatList, View } from "react-native"
import listProduct from "@/data/data"
import RenderProducts from "../RenderProducts/RenderProducts"

const ProductList = () => {


    return (
        <View>
            <FlatList
                data={listProduct}
                renderItem={({ item }) => <RenderProducts item={item} />}
                keyExtractor={(item) => String(item.id_product)}
            />
        </View>
    )
}


export default ProductList;