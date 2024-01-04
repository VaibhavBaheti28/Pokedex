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

// const firebaseConfig = {
//   apiKey: "AIzaSyDNkwUXJFMOOYjNpnTkrCo1Y9nCeTpFC04",
//   authDomain: "pokedex-fe543.firebaseapp.com",
//   projectId: "pokedex-fe543",
//   storageBucket: "pokedex-fe543.appspot.com",
//   messagingSenderId: "948503681986",
//   appId: "1:948503681986:web:79250d83d60f75960a545b",
//   measurementId: "G-4Z4DWLHXGS",
// };

//
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
