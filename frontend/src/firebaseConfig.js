// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Substitua estas chaves pelas do seu projeto no Console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyNsiGfPXncja9Pb38rv1usOLe6HflI98",
  authDomain: "microservicos-d799b.firebaseapp.com",
  projectId: "microservicos-d799b",
  storageBucket: "microservicos-d799b.firebasestorage.app",
  messagingSenderId: "1076974548322",
  appId: "1:1076974548322:web:5b7aa63fadc561cd6fa83b"
};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência de dados (mantém o usuário logado)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };