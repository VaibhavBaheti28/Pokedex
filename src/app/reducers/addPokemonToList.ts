import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToast } from "../slices/AppSlice";
import { userPokemonsType } from "../../utils/types";
import { RootState } from "../store";
import { addToUserPokemonList } from "../slices/PokemonSlice";

export const addPokemonToList = createAsyncThunk(
  "pokemon/addPokemon",
  async (pokemon: userPokemonsType, { getState, dispatch }) => {
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
      const index = userPokemons.findIndex((userPokemon: userPokemonsType) => {
        return userPokemon.name === pokemon.name;
      });

      if (index === -1) {
        await dispatch(addToUserPokemonList(pokemon));

        dispatch(setToast(`${pokemon.name} added to your collection.`));
      } else {
        dispatch(setToast(`${pokemon.name} already part of your collection.`));
      }
    } catch (err) {
      console.log({ err });
    }
  }
);
