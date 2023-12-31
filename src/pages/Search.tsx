import Wrapper from "../sections/Wrapper";
import { debounce } from "../utils";
import Loader from "../components/Loader";
import {
  usePokemonQueryByUrl,
  useRandomPokemonQuery,
} from "../app/reducers/usePokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import usePokemonList from "../app/reducers/usePokemonList";
import { useEffect, useState } from "react";

export const Search = () => {
  const handleChange = debounce((value: string) => getPokemon(value), 300);
  const { data: allPokemon } = usePokemonList();
  const { data: randomPokemons, isLoading } = useRandomPokemonQuery();
  const [filteredPokemon, setFilteredPokemon] = useState<
    {
      name?: "";
      url: string;
    }[]
  >([{ url: "" }]);
  const [displayPokemons, setDisplayPokemons] = useState(randomPokemons);

  const { data: searchedPokemon } = usePokemonQueryByUrl(filteredPokemon);

  const getPokemon = async (value: string) => {
    if (value.length > 0) {
      const pokemons = allPokemon
        .filter((pokemon: any) => pokemon.name.startsWith(value.toLowerCase()))
        .slice(0, 10);
      setFilteredPokemon(pokemons);
    }
  };
  useEffect(() => {
    setDisplayPokemons(searchedPokemon || randomPokemons);
  }, [searchedPokemon, randomPokemons]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            className="pokemon-searchbar"
            placeholder="Search Pokemon"
          />
          {displayPokemons && <PokemonCardGrid pokemons={displayPokemons} />}
        </div>
      )}
    </>
  );
};

export default Wrapper(Search);
