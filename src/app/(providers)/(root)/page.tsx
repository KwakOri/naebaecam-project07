"use client";

import { usePokemons } from "@/query/query.pokomons";

const HomePage = () => {
  const { data, error, isPending } = usePokemons();
  console.log(data, error, isPending);

  return <div>page</div>;
};

export default HomePage;
