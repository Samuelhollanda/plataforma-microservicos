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

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Removemos o createUser
import { auth } from '../../firebaseConfig'; 
import stylesLogin from './Style.Login';

// Adicionamos a rota Register aqui também
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  MainTabs: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: Props) {
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
      navigation.replace('MainTabs'); 
    } catch (error) {
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

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={stylesLogin.container}
    >
      <View style={stylesLogin.formContainer}>
        <Text style={stylesLogin.title}>Bem-vindo</Text>

        <TextInput
          style={stylesLogin.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={stylesLogin.input}
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
            <TouchableOpacity style={stylesLogin.button} onPress={handleLogin}>
              <Text style={stylesLogin.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Mudamos a ação deste botão para NAVEGAR em vez de CADASTRAR */}
            <TouchableOpacity 
              style={[stylesLogin.button, stylesLogin.buttonOutline]} 
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={stylesLogin.buttonOutlineText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}