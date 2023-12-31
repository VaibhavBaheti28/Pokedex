import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkS-_I7h-Ct7E2s-E_91d3vsrshLoR4yc",

  authDomain: "pokedex-66661.firebaseapp.com",

  projectId: "pokedex-66661",

  storageBucket: "pokedex-66661.appspot.com",

  messagingSenderId: "657028810198",

  appId: "1:657028810198:web:516836c214107f65029077",

  measurementId: "G-DKK5V9BLSH",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
