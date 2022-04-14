import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  isOpen: boolean
}

const initialState = { isOpen: true } as CounterState

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toogle(state) {
      state.isOpen = !state.isOpen;
    },
  },
})

export const { toogle } = sidebarSlice.actions
export default sidebarSlice.reducer