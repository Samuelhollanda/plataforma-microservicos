import { ImageSourcePropType } from "react-native";

interface Product {
    id_product: number,
    title: string,
    photo: ImageSourcePropType,
    description: string
}

const listProduct: Product[] = [
    {
        id_product: 1,
        title: "Jardineiro",
        photo: { uri: "https://images.pexels.com/photos/33688146/pexels-photo-33688146.jpeg"},
        description: "Servicos de Jardinagem"
    },
    {
        id_product: 2,
        title: "Carpinteiro",
        photo: { uri: "https://images.pexels.com/photos/5466227/pexels-photo-5466227.jpeg"},
        description: "Servicos de Carpintaria"
    }
]

export default listProduct;