import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToast } from "../slices/AppSlice";
import { RootState } from "../store";
import { updateDoc, doc, addDoc, getDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";

export const addListToDatabase = createAsyncThunk(
  "pokemon/addPokemonList",
  async (_, { getState, dispatch }) => {
    try {
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;

      if (!userInfo?.email) {
        return dispatch(
          setToast("Please login in order to add pokemon to your collection.")
        );
      }

      const userDocRef = doc(pokemonListRef, userInfo.email);

      const docSnap = await getDoc(userDocRef);

      if (userPokemons.length > 0) {
        console.log(docSnap.id, userDocRef);
        if (docSnap.id) {
          await updateDoc(userDocRef, {
            pokemon: userPokemons,
          });
        } else {
          await addDoc(pokemonListRef, {
            pokemon: userPokemons,
            email: userInfo.email,
          });
        }
      }
      dispatch(setToast(`Pokemons updated in your collection.`));
    } catch (err) {
      console.error({ err });
    }
  }
);

export default addListToDatabase;
