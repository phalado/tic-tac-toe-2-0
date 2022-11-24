import { ReactElement } from 'react'
import { Socket } from 'socket.io-client'

export default interface GameContextInterface {
  children?: ReactElement
  socket: Socket
  gameOn: boolean
  setGameOn: (gameOn: boolean) => void
  gameId: string
  setGameId: (id: string) => void
  round: number
  setRound: (round: number) => void
  playerOneName: string
  playerTwoName: string
  playerOne: boolean
  playerId: string
  playerTurn: boolean
  setPlayerTurn: (turn: boolean) => void
  playerOneHand?: number[]
  playerTwoHand?: number[]
  selectedPiece?: { index: number, value: number }
  setSelectedPiece?: (selectedPiece: { index: number, value: number }) => void
}
