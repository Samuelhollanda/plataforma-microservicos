// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Substitua estas chaves pelas do seu projeto no Console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADqMbUEOfs_Zw83J--guQLwst2Z6M3ryU",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "micoservicos-c9fe0",
  storageBucket: "micoservicos-c9fe0.firebasestorage.app",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "1:1089108489042:android:83ea997edc9bf2718cc08b"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência de dados (mantém o usuário logado)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };