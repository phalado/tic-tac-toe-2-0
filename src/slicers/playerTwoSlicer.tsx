import { createSlice } from '@reduxjs/toolkit';

const playerTwoSlice = createSlice({
  name: 'playerTwo',
  initialState: {
    username: 'Player Two',
    pieces: [1, 1, 2, 2, 3, 3],
  },
  reducers: {
    removePieceFromHandTwo: (state: any = {}, action: { payload: number[] }) => ({
      ...state,
      pieces: action.payload
    }),
    changeUserNameTwo: (state: any = {}, action: { payload: string }) => ({
      ...state,
      username: action.payload
    })
  }
})

export const { removePieceFromHandTwo, changeUserNameTwo } = playerTwoSlice.actions
export default playerTwoSlice;
