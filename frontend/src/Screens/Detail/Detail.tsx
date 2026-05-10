import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image,  } from "react-native";
import { useRoute } from '@react-navigation/native';
import { listProduct } from '../../../data/data';
import style from './Style.Detail';


const Detail = () => {
  const route = useRoute();

  // Pegamos o id_product que o botão do RenderProducts enviou
  const { id_product } = route.params as { id_product: number };

  // Buscamos os dados da profissão específica dentro do seu array
  const item = listProduct.find((p) => p.id_product === id_product);

  // Segurança: se não achar o ID, não quebra o app
  if (!item) {
    return (
      <View style={style.container}>
        <Text>Informação não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      
      {/* IMAGEM: Muda conforme a profissão (id_product) */}
      <Image source={item.photo} style={style.image} />

      {/* TEXTO DINÂMICO 1: O título da profissão (ex: Jardineiro) */}
      <Text style={style.title}>
        {item.title}
      </Text>

      {/* TEXTO DINÂMICO 2: A descrição que está no seu data.ts */}
      <Text style={style.description}>
        {item.description}
      </Text>

      {/* --- LOCAL PARA TEXTO MANUAL --- */}
      <Text style={style.detailText}>
        Você pode escrever qualquer texto fixo aqui! 
        Exemplo: "Entre em contato para agendar este serviço."
      </Text>

    </View>
  );
};

export default Detail;