import { Pokemon } from "@/types/types.pokemons";
import Image from "next/image";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="border border-white rounded-lg text-white p-4">
      <div className="relative aspect-square">
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} fill />
      </div>
      <p>{pokemon.korean_name}</p>
      <p>도감번호: {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
