import { View, TextInput } from "react-native"
import style from "./Style.SearchBar";




const SearchBar = () => {
    return (
        <View>
            <TextInput 
                placeholder="O que procura hoje?"
                style={style.search}
            />
        </View>
    )

}

export default SearchBar;