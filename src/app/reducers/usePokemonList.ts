import { useQuery } from "react-query";
import axios from "axios";
import { pokemonsRoute } from "../../utils/constants";

const getPokemonList = async () => {
  const { data } = await axios.get(pokemonsRoute);
  return data.results;
};

const usePokemonList = () => {
  return useQuery("getAllPokemon", async () => {
    return await getPokemonList();
  });
};

export default usePokemonList;
