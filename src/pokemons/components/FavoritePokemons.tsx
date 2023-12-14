"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { SimplePokemon } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

  return (
    <>
      {pokemons.length === 0 ? (
        <EmptyPokemonGrid />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

const EmptyPokemonGrid = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
