import { createSlice } from '@reduxjs/toolkit';

const playerOneSlice = createSlice({
  name: 'playerOne',
  initialState: {
    username: 'Player One',
    pieces: [1, 1, 2, 2, 3, 3],
  },
  reducers: {
    removePieceFromHandOne: (state: any = {}, action: { payload: number[] }) => ({
      ...state,
      pieces: action.payload
    }),
  }
})

export const { removePieceFromHandOne } = playerOneSlice.actions
export default playerOneSlice;
