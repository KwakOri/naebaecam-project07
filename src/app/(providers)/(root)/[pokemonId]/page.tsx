import { api } from "@/api/api";
import Detail from "@/components/Detail";
import Page from "@/components/Page";

const DetailPage = async ({
  params: { pokemonId },
}: {
  params: { pokemonId: number };
}) => {
  const pokemonInfo = await api.pokemons.getPokemon(pokemonId);
  return (
    <Page width="sm">
      <Detail pokemonInfo={pokemonInfo} />
    </Page>
  );
};

export default DetailPage;
