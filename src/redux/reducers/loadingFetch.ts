import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RespCharacters, Result } from "../../models/RespCharacters";

interface LoadingFetchState {
  isLoading: boolean;
}

const initialState = { isLoading: false } as LoadingFetchState;

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
