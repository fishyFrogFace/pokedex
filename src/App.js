// The <App /> component is responsible for rendering the two main columns
import React, { useEffect, useState } from "react";
import { BaseStyles } from "@primer/components";
import { Flex } from "@primer/components";
import PokemonList from "./columns/PokemonList";
import PokemonDetails from "./columns/PokemonDetails";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    document.title = `${selectedPokemon ? `${selectedPokemon} | ` : ""}Pokedex`;
  }, [selectedPokemon]);

  return (
    <BaseStyles>
      <Flex>
        <PokemonList setSelectedPokemon={setSelectedPokemon} />
        <PokemonDetails name={selectedPokemon} />
      </Flex>
    </BaseStyles>
  );
}
