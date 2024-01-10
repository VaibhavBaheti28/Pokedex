import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import Loader from "../../components/Loader";
import { getPokemonDataByUrl } from "../../app/reducers/usePokemonData";
import { userPokemonsType } from "../../utils/types";

function Evolution() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector(({ pokemon }) => pokemon);
  const [evolutionsData, setEvolutionsData] = useState<userPokemonsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonData.currentPokemon) {
        const evolutions = pokemonData.currentPokemon?.evolution.map(
          (element) => {
            const url = element.pokemon.url;
            return getPokemonDataByUrl({ url });
          }
        );

        if (evolutions) {
          try {
            const resolvedEvolutions = await Promise.all(evolutions);
            setEvolutionsData(resolvedEvolutions);
            setIsLoaded(true);
          } catch (error) {
            console.error("Error fetching evolution data:", error);
          }
        }
      }
    };

    fetchData();
  }, [dispatch, pokemonData.currentPokemon]);

  return (
    <div className="page">
      {isLoaded ? <PokemonCardGrid pokemons={evolutionsData} /> : <Loader />}
    </div>
  );
}

export default Evolution;
