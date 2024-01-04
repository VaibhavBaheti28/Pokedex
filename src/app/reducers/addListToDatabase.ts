import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToast } from "../slices/AppSlice";
import { RootState } from "../store";
import { updateDoc, doc, query, where, getDocs } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";

export const addListToDatabase = createAsyncThunk(
  "pokemon/addPokemonList",
  async (_, { getState, dispatch }) => {
    try {
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;

      const firestoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo?.email)
      );

      const fetchedPokemons = await getDocs(firestoreQuery);

      if (fetchedPokemons.docs.length) {
        for (const pokemonDoc of fetchedPokemons.docs) {
          const docRef = doc(pokemonListRef, pokemonDoc.id);

          // Update the document with the new userPokemons data
          await updateDoc(docRef, {
            pokemon: userPokemons,
          });
          dispatch(setToast(`Pokemons updated in your collection.`));
        }
      }
    } catch (err) {
      console.error({ err });
    }
  }
);

export default addListToDatabase;
