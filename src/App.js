// The <App /> component is responsible for rendering the two main columns
import React, { useState } from "react";
import { BaseStyles } from "@primer/components";
import { Flex } from "@primer/components";
import PokemonList from "./columns/PokemonList";
import PokemonDetails from "./columns/PokemonDetails";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  /*   updateDocumentTitle() {
    const { selectedPokemon } = this.state;
    document.title = `${selectedPokemon ? `${selectedPokemon} | ` : ""}Pokedex`;
  }

  componentDidMount() {
    this.updateDocumentTitle();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedPokemon !== this.state.selectedPokemon) {
      this.updateDocumentTitle();
    }
  }
 */

  return (
    <BaseStyles>
      <Flex>
        <PokemonList setSelectedPokemon={setSelectedPokemon} />
        <PokemonDetails name={selectedPokemon} />
      </Flex>
    </BaseStyles>
  );
}
