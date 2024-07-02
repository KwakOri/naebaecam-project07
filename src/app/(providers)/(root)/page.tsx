"use client";

import { usePokemons } from "@/query/query.pokomons";

const HomePage = () => {
  const { data, error, isPending } = usePokemons();

  if (isPending) return <div>Loading...</div>;
  return <div>page</div>;
};

export default HomePage;
