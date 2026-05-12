import { View, Text } from 'react-native';
import styles from './Style.Header';

export default function Header({style}: any) {
    return (
        <View style={styles.topoLinha}>
            <Text style={styles.logo}>PMM</Text>
            <Text style={styles.localizacao}>Teresina, Piauí</Text>
        </View>
    );
}