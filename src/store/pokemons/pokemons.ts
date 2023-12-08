import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState = {
  "1": { id: "1", name: "Bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      if (!!state[pokemon.id]) {
        delete state[pokemon.id];
        return;
      }
      state[pokemon.id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
