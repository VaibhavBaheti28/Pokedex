// @ts-nocheck

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonTypes } from "../../utils";
import { generatedPokemonType, genericPokemonType } from "../../utils/types";

export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const axiosRequests = pokemons.map((pokemon) => axios.get(pokemon.url));

      const responses = await Promise.all(axiosRequests);

      const pokemonsData: generatedPokemonType[] = responses.map(
        ({
          data,
        }: {
          data: { id: number; types: { type: genericPokemonType }[] };
        }) => {
          const types = data.types.map(
            ({ type: { name } }: { type: { name: string } }) => ({
              [name]: pokemonTypes[name],
            })
          );
          const image =
            data.sprites.other.dream_world.front_shiny ||
            data.sprites.other.dream_world.front_default;

          if (image) {
            return {
              name: data.name,
              id: data.id,
              image,
              types,
            };
          }

          return null; // or handle the case where image is not available
        }
      );

      // Filter out null values (Pokémon without images)
      const filteredPokemonsData = pokemonsData.filter(
        (pokemonData) => pokemonData !== null
      );

      return filteredPokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
