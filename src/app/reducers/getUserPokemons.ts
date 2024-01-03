import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, where } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { RootState } from "../store";
import { userPokemonsType } from "../../utils/types";
export const getUserPokemons = createAsyncThunk(
  "pokemon/userList",
  async (_, { getState }) => {
    try {
      const {
        app: { userInfo },
      } = getState() as RootState;

      if (!userInfo?.email) {
        return [];
      }

      const firestoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo?.email)
      );

      const fetchedPokemons = await getDocs(firestoreQuery);

      if (fetchedPokemons.docs.length) {
        let userPokemons: userPokemonsType[] = [];

        for (const pokemon of fetchedPokemons.docs) {
          const pokemons = pokemon.data().pokemon;

          for (const userPokemon of pokemons) {
            userPokemons.push(userPokemon);
          }
        }

        console.log(userPokemons);
        return userPokemons;
      }

      return [];
    } catch (err) {
      console.error(err);
      throw err; // Propagate the error for the Redux toolkit to handle
    }
  }
);

export default getUserPokemons;
