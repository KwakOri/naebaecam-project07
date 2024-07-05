import { Pokemon } from "@/types/types.pokemons";
import Link from "next/link";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <div className="w-full grid grid-cols-6 gap-4">
      {pokemons.map((pokemon) => {
        return (
          <Link href={`/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
