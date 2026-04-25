import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  ActivityIndicator
} from 'react-native';

// 1. Importamos os tipos do React Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 

// 2. Definimos as rotas que existem no seu App
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

// 3. Tipamos especificamente a navegação desta tela
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// 4. Dizemos que as Props do componente incluem a tipagem acima
interface Props {
  navigation: LoginScreenNavigationProp;
}

// 5. Aplicamos a interface Props no componente
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home'); 
    } catch (error) {
      // 6. Afirmamos para o TS o formato do erro do Firebase
      const err = error as { code: string; message: string };

      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
      } else if (err.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'Formato de e-mail inválido.');
      } else {
        Alert.alert('Erro', err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Preencha os campos para criar uma conta.');
      return;
    }

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');
    } catch (error) {
      // 6. Afirmamos para o TS o formato do erro do Firebase novamente
      const err = error as { code: string; message: string };

      if (err.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Este e-mail já está em uso.');
      } else if (err.code === 'auth/weak-password') {
        Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      } else {
        Alert.alert('Erro', err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-vindo</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
              <Text style={styles.buttonOutlineText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007bff',
    marginTop: 15,
  },
  buttonOutlineText: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});