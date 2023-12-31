import { useQuery } from "react-query";
import axios from "axios";
import { pokemonTypes } from "../../utils";
import { pokemonRoute } from "../../utils/constants";
import { PokemonType } from "../../utils/pokemonTypes";
import { userPokemonsType } from "../../utils/types";

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

  return {
    name: data.name,
    id: data.id,
    image,
    types,
  };
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
    data.sprites.other.dream_world.front_default;

  return {
    name: data.name,
    id: data.id,
    image,
    types,
  };
};

const usePokemonQuery = (pokemonIds: number[]) => {
  return useQuery("pokemonData", async () => {
    const promises = pokemonIds.map((pokemonId) => getPokemonData(pokemonId));
    const results = await Promise.all(promises);

    // Filter out null values (Pokémon without images)
    return results.filter((pokemonData) => pokemonData !== null);
  });
};

const usePokemonQueryByUrl = (pokemons: { url: string }[]) => {
  return useQuery("pokemonDataByUrl", async () => {
    const promises = pokemons.map((pokemon: { url: string }) =>
      getPokemonDataByUrl(pokemon)
    );
    const results = await Promise.all(promises);

    // Filter out null values (Pokémon without images)
    return results.filter((pokemonData) => pokemonData !== null);
  });
};

export const useRandomPokemonQuery = () => {
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

      const pokemonIds = generateRandomNumbers(10, 26000);
      const promises = pokemonIds.map((pokemonId: number) =>
        getPokemonData(pokemonId)
      );
      const results = await Promise.all(promises);

      // Filter out null values (Pokémon without images)
      return results?.filter((pokemonData) => pokemonData !== undefined);
    },
    {
      refetchInterval: 10000, // 10 seconds in milliseconds
    }
  );
};

export default usePokemonQuery;
