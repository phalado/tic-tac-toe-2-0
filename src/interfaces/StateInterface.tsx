export default interface StateInterface {
  table: {
    value: number,
    color: boolean
  }[],
  playerOne: {
    username: string,
    pieces: number[]
  },
  playerTwo: {
    username: string,
    pieces: number[]
  },
  game: {
    round: number,
    currentPlayer: boolean,
    selectedPieceIndex: number,
    selectedPieceValue: number,
    gameOn: true
  }
}
