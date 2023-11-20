import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Listado de pokémons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons Favoritos <small>Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
