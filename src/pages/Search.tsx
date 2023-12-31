import Wrapper from "../sections/Wrapper";
import { debounce } from "../utils";
import Loader from "../components/Loader";
import { useRandomPokemonQuery } from "../app/reducers/usePokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import usePokemonList from "../app/reducers/usePokemonList";
import { useState } from "react";

export const Search = () => {
  const handleChange = debounce((value: string) => getPokemon(value), 300);
  const { data: allPokemon } = usePokemonList();
  const { data: randomPokemons, isLoading } = useRandomPokemonQuery();

  const [displayPokemons, setDisplayPokemons] = useState(
    randomPokemons || [
      {
        name: "",
        id: 0,
        image: "",
        types: {},
      },
    ]
  );
  const getPokemon = async (value: string) => {
    if (value.length > 0) {
      const pokemons = allPokemon.filter((pokemon: any) =>
        pokemon.name.includes(value.toLowerCase())
      );
      setDisplayPokemons(pokemons);
    }
  };

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
          {randomPokemons && <PokemonCardGrid pokemons={displayPokemons} />}
        </div>
      )}
    </>
  );
};

export default Wrapper(Search);
