import { Pokemon } from "@/types/types.pokemons";
import { getFormatedId } from "@/utils/format";
import Image from "next/image";
import Button from "../Button";
import Chip from "../Chip";

const Detail = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
  const types = pokemonInfo.types;
  const abilities = pokemonInfo.abilities;
  const moves = pokemonInfo.moves;

  return (
    <div className="px-2 pb-10 bg-white">
      <div className="h-20 bg-gray-200 flex flex-col items-center justify-center">
        <h6 className="font-bold text-lg">{pokemonInfo.korean_name}</h6>
        <p className="text-sm">No. {getFormatedId(pokemonInfo.id)}</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <Image
          src={pokemonInfo.sprites.front_default}
          alt={pokemonInfo.name}
          width="100"
          height="100"
        />
        <p className="text-md">이름: {pokemonInfo.korean_name}</p>
        <p className="text-sm">
          키: {pokemonInfo.height / 10} m 무게: {pokemonInfo.weight / 10} kg
        </p>
        <div className="flex gap-4">
          <ul className="flex items-center gap-1.5">
            <p className="text-sm font-bold">타입: </p>
            {types.map((type, i) => {
              return (
                <li key={i}>
                  <Chip intent={"type"}>{type.type.korean_name}</Chip>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-1.5">
            <p className="text-sm font-bold">특성: </p>
            {abilities.map((ability, i) => {
              return (
                <li key={i}>
                  <Chip intent={"feature"}>{ability.ability.korean_name}</Chip>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-sm font-bold">기술: </p>
        <ul className="flex justify-center flex-wrap gap-2">
          {moves.map((move, i) => (
            <li key={i}>
              <p>{move.move.korean_name}</p>
            </li>
          ))}
        </ul>
        <Button>뒤로 가기</Button>
      </div>
    </div>
  );
};

export default Detail;
