import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameId: '',
    gameOn: false,
    round: 1,
    playerTurn: true,
    player: true,
    selectedPieceIndex: -1,
    selectedPieceValue: -1,
    playerId: ''
  },
  reducers: {
    changeCurrentPlayer: (state: any = {}) => ({
      ...state,
      playerTurn: !state.playerTurn,
      round: state.round + 1,
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
    }),
    newGame: (state: any, action: { payload: { gameId: string, playerId: string } }) => ({
      ...state,
      gameId: action.payload.gameId,
      playerId: action.payload.playerId
    }),
    startGame: (state: any, action: { payload: { round: number, playerTurn: boolean } }) => ({
      ...state,
      gameOn: true,
      round: action.payload.round,
      playerTurn: action.payload.playerTurn
    }),
    changeToPlayerTwo: (state: any) => ({
      ...state,
      player: false
    })
  }
})

export const {
  changeCurrentPlayer,
  changeSelectedPiece,
  endGame,
  newGame,
  startGame,
  changeToPlayerTwo
} = gameSlice.actions
export default gameSlice;
