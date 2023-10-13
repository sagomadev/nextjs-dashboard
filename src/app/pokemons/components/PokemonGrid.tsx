import Image from "next/image";
import { SimplePokemon } from "../";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-start">
      {pokemons.map((pokemon) => (
        <Image
          key={pokemon.id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};
