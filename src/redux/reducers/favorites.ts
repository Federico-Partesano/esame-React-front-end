import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "../../models/RespCharacters";

interface FavoritesState {
  favorites: Result[];
}

const initialState = { favorites: [] } as FavoritesState;

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
      getFavorites(state, { payload }: PayloadAction<Result[]>) {
        state.favorites = payload;
      },
    addFavorites(state, { payload }: PayloadAction<Result>) {
      state.favorites = [...state.favorites, payload];
    },
    deleteFavorite(state, { payload }: PayloadAction<Result>) {
        state.favorites = [...state.favorites.filter(({id}) => id !== payload.id)];
      },
    resetFavorites(state){
        state.favorites = [];
    }
  },
});

export const { addFavorites, getFavorites ,deleteFavorite ,resetFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
