import { ReactElement, SetStateAction } from 'react'
import TableInterface from './TableInterface'

export default interface GameContextInterface {
  children?: ReactElement
  gameOn: boolean
  setGameOn: React.Dispatch<SetStateAction<boolean>>
  gameId: string
  setGameId: (id: string) => void
  round: number
  setRound: React.Dispatch<SetStateAction<number>>
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
  removePieceFromHandOne: React.Dispatch<number>
  removePieceFromHandTwo: React.Dispatch<number>
  selectedPiece?: { index: number, value: number }
  setSelectedPiece?: React.Dispatch<SetStateAction<any>>
  endGame: () => void
}
