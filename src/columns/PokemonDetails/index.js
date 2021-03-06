// Renders the profile and games of a single pokemon
import React, { useState, useEffect } from "react";
import { Spinner } from "@nice-boys/components";
import PokemonProfile from "../../components/PokemonProfile";
import PokemonGamesSection from "../../components/PokemonGamesSection";
import Column from "../../components/Column";
import { fetchPokemonGames, fetchPokemonByName } from "../../api/pokeapi";

function PokemonGames(props) {
  const [games, setGames] = useState(null);

  useEffect(() => {
    setGames(null);

    fetchPokemonGames(
      props.pokemon.game_indices.map(game => game.version.name)
    ).then(games => {
      setGames(games);
    });
  }, [props.pokemon.game_indices, props.pokemon.name]);

  return !games ? <Spinner /> : <PokemonGamesSection games={games} />;
}

const usePokemon = name => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(null);

    if (!name) return;
    fetchPokemonByName(name).then(pokemon => {
      setPokemon(pokemon);
    });
  }, [name]);

  return pokemon;
};

export default function Pokemon(props) {
  const pokemon = usePokemon(props.name);

  return (
    <Column width={1} p={4}>
      {!props.name ? null : !pokemon ? (
        <Spinner />
      ) : (
        <>
          <PokemonProfile pokemon={pokemon} />
          <PokemonGames pokemon={pokemon} />
        </>
      )}
    </Column>
  );
}
