import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./Style.RenderProducts";

const RenderProducts = ({ item }: { item: any }) => {
  const navigation = useNavigation<any>();

  

  return (
    <View style={style.container}>
      <Image source={item.photo || { uri: 'https://via.placeholder.com/150' }} style={style.image} />

      <View style={style.infoContainer}>
        <Text style={style.title}>{item.title || 'Sem título'}</Text>

        <View>
          <Text style={style.detail}>Descrição:</Text>
          <Text style={style.detail}>{item?.description || 'Sem descrição'}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={style.buyButton}
        >
          <Text style={style.buyButtonText}>Comprar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderProducts;
