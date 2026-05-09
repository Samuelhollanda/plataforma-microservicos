import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./Style.Profile";

const Profile = () => {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>

            <View style={styles.profileContainer}>
                <Image
                    source={require("../../../assets/images/Urso.png")}
                    style={styles.image}
                />

                <Text style={styles.name}>Maira</Text>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        View and Edit Profile
                    </Text>
                </Pressable>
            </View>

            <View style={styles.menu}>

                <Text style={styles.menuItem}>
                    Buy Packages & My Orders
                </Text>

                <Text style={styles.menuItem}>
                    Settings
                </Text>

                <Text style={styles.menuItem}>
                    Help & Support
                </Text>

                <Text style={styles.menuItem}>
                    Select Language
                </Text>

            </View>

        </View>
    );
};

export default Profile;