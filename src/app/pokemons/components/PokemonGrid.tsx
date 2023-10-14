import Image from "next/image";
import { SimplePokemon } from "../";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} />
      ))}
    </div>
  );
};
