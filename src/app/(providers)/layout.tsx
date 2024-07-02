import { PokemonsProvider } from "@/contexts/Pokemons.contexts";
import { QueryProvider } from "@/query/QueryProvider";
import { PropsWithChildren } from "react";

const ProvidersLayout = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <PokemonsProvider>{children}</PokemonsProvider>
    </QueryProvider>
  );
};

export default ProvidersLayout;
