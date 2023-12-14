"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { SimplePokemon } from "@/pokemons";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);
  return <PokemonGrid pokemons={pokemons} />;
};
