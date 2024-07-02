"use client";

import Page from "@/components/Page";
import PokemonList from "@/components/PokemonList";
import { usePokemons } from "@/query/query.pokomons";

const HomePage = () => {
  const { data: pokemons, error, isPending } = usePokemons();

  if (!pokemons || isPending) return <div>Loading...</div>;
  return (
    <Page>
      <PokemonList pokemons={pokemons} />
    </Page>
  );
};

export default HomePage;
