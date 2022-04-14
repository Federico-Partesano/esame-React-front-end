import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RespCharacters } from '../../models/RespCharacters'

interface CharactersState {
  characters: RespCharacters | undefined
}

const initialState = {characters: undefined} as CharactersState

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, {payload}: PayloadAction<RespCharacters>) {
      state.characters = payload
    },
  },
})

export const { setCharacters } = charactersSlice.actions
export default charactersSlice.reducer