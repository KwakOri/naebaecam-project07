"use client";

import Page from "@/components/Page";
import { usePokemons } from "@/query/query.pokomons";

const HomePage = () => {
  const { data, error, isPending } = usePokemons();

  if (isPending) return <div>Loading...</div>;

  return <Page>hello</Page>;
};

export default HomePage;
