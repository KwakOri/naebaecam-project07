import { api } from "@/api/api";
import { Pokemon } from "@/types/types.pokemons";
import { useQuery } from "@tanstack/react-query";

const queryKeys = {
  pokemons: ["pokemons"] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.pokemons,
    queryFn: () => api.pokemons.getPokemons(),
  }),
};

export const usePokemons = () => {
  return useQuery<Pokemon[]>(queryOptions.all());
};
