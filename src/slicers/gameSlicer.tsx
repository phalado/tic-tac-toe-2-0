import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    round: 1,
    currentPlayer: true,
    selectedPieceIndex: -1,
    selectedPieceValue: -1,
    gameOn: true
  },
  reducers: {
    changeCurrentPlayer: (state: any = {}) => ({
      ...state,
      currentPlayer: !state.currentPlayer,
      selectedPieceIndex: -1,
      selectedPieceValue: -1
    }),
    changeSelectedPiece: (
      state: any = {}, action: { payload: { index: number, value: number } }
    ) => ({
      ...state,
      selectedPieceIndex: action.payload.index,
      selectedPieceValue: action.payload.value
    }),
    endGame: (state: any = {}) => ({
      ...state,
      gameOn: false
    })
  }
})

export const { changeCurrentPlayer, changeSelectedPiece, endGame } = gameSlice.actions
export default gameSlice;
