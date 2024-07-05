"use client";

import { Pokemon } from "@/types/types.pokemons";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const initialValue = {};

const PokemonsContext = createContext(initialValue);

export const usePokemonsContext = () => useContext(PokemonsContext);

export const PokemonsProvider = ({ children }: PropsWithChildren) => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};
