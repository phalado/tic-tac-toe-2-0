import { Dispatch, ReactElement, SetStateAction } from 'react'
import TableInterface from './TableInterface'
import { Socket } from 'socket.io-client'

export default interface GameContextInterface {
  children?: ReactElement
  socket: Socket
  gameOn: boolean
  setGameOn: Dispatch<SetStateAction<boolean>>
  gameId: string
  setGameId: (id: string) => void
  round: number
  setRound: Dispatch<SetStateAction<number>>
  playerOneName: string
  playerTwoName: string
  playerOne: boolean
  playerId: string
  playerTurn: boolean
  setPlayerTurn: React.Dispatch<SetStateAction<boolean>>
  table: TableInterface[]
  playerOneHand: number[]
  playerTwoHand: number[]
  updateTable: (cell: number, value: number, color: boolean) => void
  removePieceFromHandOne: Dispatch<number>
  removePieceFromHandTwo: Dispatch<number>
  selectedPiece?: { index: number, value: number }
  setSelectedPiece?: Dispatch<SetStateAction<any>>
  endGame: () => void,
  endGameModalOpen: boolean,
  setEndGameModalOpen: Dispatch<SetStateAction<boolean>>
  victor?: string
  score?: number[]
  returnToHomepage: () => void
  newGameStart: (playerTurn: boolean) => void
}
