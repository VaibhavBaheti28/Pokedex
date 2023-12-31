import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { pokemonTypes } from "../../utils";
import { pokemonRoute } from "../../utils/constants";
import { PokemonType } from "../../utils/pokemonTypes";
import { userPokemonsType } from "../../utils/types";

function chunkArray(array: any, chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const getPokemonData = async (pokemonId: number) => {
  const { data } = await axios.get(`${pokemonRoute}/${pokemonId}`);

  const types = data.types.map(
    ({ type: { name } }: { type: { name: PokemonType } }) => ({
      [name]: pokemonTypes[name],
    })
  );

  const image =
    data.sprites.other.dream_world.front_shiny ||
    data.sprites.other.dream_world.front_default;
  if (data.name)
    return {
      name: data.name,
      id: data.id,
      image: image,
      types,
    };
  return null;
};

const getPokemonDataByUrl = async (pokemon: { url: string }) => {
  const { data } = await axios.get(pokemon.url);

  const types = data.types.map(
    ({ type: { name } }: { type: { name: PokemonType } }) => ({
      [name]: pokemonTypes[name],
    })
  );
  const image =
    data.sprites.other.dream_world.front_shiny ||
    data.sprites.other.dream_world.front_default ||
    data.sprites.front_shiny ||
    data.sprites.front_default;

  return {
    name: data.name,
    id: data.id,
    image,
    types,
  };
};

export const usePokemonQuery = (pokemonIds: number[]) => {
  return useQuery("pokemonData", async () => {
    const promises = pokemonIds.map((pokemonId) => getPokemonData(pokemonId));
    const results = await Promise.all(promises);

    // Filter out null values (Pokémon without images)
    return results.filter((pokemonData) => pokemonData !== null);
  });
};

export const usePokemonQueryByUrl = (pokemons: { url: string }[]) => {
  return useQuery(["pokemonDataByUrl", pokemons], async () => {
    const promises = pokemons.map((pokemon: { url: string }) =>
      getPokemonDataByUrl(pokemon)
    );
    const results = await Promise.all(promises);

    // Filter out null values (Pokémon without images)
    return results.filter((pokemonData) => pokemonData !== null);
  });
};
export const useRandomPokemonQuery: () => UseQueryResult<
  userPokemonsType[]
> = () => {
  return useQuery(
    "randomPokemonData",
    async () => {
      const generateRandomNumbers = (count: number, max: number) => {
        const randomNumbers: number[] = [];
        while (randomNumbers.length < count) {
          const randomNumber = Math.floor(Math.random() * max) + 1;
          if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
          }
        }
        return randomNumbers;
      };

      const pokemonIds = generateRandomNumbers(80, 1302);
      try {
        const promises = pokemonIds.map((pokemonId: number) =>
          getPokemonData(pokemonId)
        );

        const chunkedArrays = chunkArray(promises, 8);
        const promiseChunks = chunkedArrays.map((chunk) => {
          return Promise.race(chunk);
        });
        const firstResolvedResults = await Promise.all(promiseChunks);

        if (firstResolvedResults !== null) {
          return firstResolvedResults;
        } else {
          throw new Error("No valid Pokémon data");
        }
      } catch (error) {
        console.error("Error fetching random Pokémon data:", error);
        throw error;
      }
    },
    {
      refetchInterval: 10000, // 10 seconds in milliseconds
    }
  );
};
