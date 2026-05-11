import { useRoute } from '@react-navigation/native';
import { View, Text, Button, Image,  } from "react-native";
import { listProduct } from '../../../data/data';
import style from './Style.Detail';


const Detail = () => {
  const route = useRoute();

  const { id_product } = route.params as { id_product: number };

  const item = listProduct.find((p) => p.id_product === id_product);

  if (!item) {
    return (
      <View style={style.container}>
        <Text>Informação não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      
      <Image source={item.photo} style={style.image} />

      <Text style={style.title}>
        {item.title}
      </Text>

      <Text style={style.description}>
        {item.description}
      </Text>

      <Text style={style.detailText}>
        Você pode escrever qualquer texto fixo aqui! 
        Exemplo: "Entre em contato para agendar este serviço."
      </Text>

    </View>
  );
};

export default Detail;