// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Ваша Firebase конфігурація
  apiKey: "AIzaSyDkc5JHGCm_S5YFZPkhSdgpApLMv5uDUXg",
  authDomain: "otpo-4611d.firebaseapp.com",
  projectId: "otpo-4611d",
  storageBucket: "otpo-4611d.firebasestorage.app",
  messagingSenderId: "662608262850",
  appId: "1:662608262850:web:3cfed64c059843b0642d5b",
  measurementId: "G-L7GM5S0C17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);