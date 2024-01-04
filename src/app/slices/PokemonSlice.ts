import { createSlice } from "@reduxjs/toolkit";

import { getUserPokemons } from "../reducers/getUserPokemons";
import {
  PokemonInitialStateType,
  generatedPokemonType,
} from "../../utils/types";
import addListToDatabase from "../reducers/addListToDatabase";

const initialState: PokemonInitialStateType = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const queue = [...state.compareQueue];
      queue.splice(index, 1);
      state.compareQueue = queue;
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
    resetRandomPokemons: (state) => {
      state.randomPokemons = undefined;
    },
    addToUserPokemonList: (state, action) => {
      const index = state.userPokemons.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        state.userPokemons.push(action.payload);
      }
    },
    removeFromUserPokemonList: (state, action) => {
      const index = state.userPokemons.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const queue = [...state.userPokemons];
      queue.splice(index, 1);
      state.userPokemons = queue;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      state.userPokemons = action.payload!;
    });
    builder.addCase(addListToDatabase.fulfilled, (state, action) => {
      state.userPokemons = [];
    });
  },
});

export const {
  addToCompare,
  removeFromCompare,
  setCurrentPokemon,
  resetRandomPokemons,
  addToUserPokemonList,
  removeFromUserPokemonList,
} = PokemonSlice.actions;
