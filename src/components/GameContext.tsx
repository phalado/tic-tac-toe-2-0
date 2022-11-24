import React, { createContext, useEffect, useState } from 'react'
import { removePieceFromHand, updateTable } from '../helpers/CellHelpers'
import { checkEndGame } from '../helpers/Gamehelpers'
import GameContextInterface from '../interfaces/GameContextInterface'
import NewMoveInterface from '../interfaces/NewMoveInterface'
import { endGame } from '../slicers/gameSlicer'

export const GameContext = createContext<Partial<GameContextInterface>>({
  gameOn: false,
  setGameOn: () => {},
  gameId: '',
  setGameId: () => {},
  playerId: '',
  round: 0,
  setRound: () => {},
  playerOneName: 'Mario',
  playerTwoName: 'Luigi',
  playerOne: true,
  playerTurn: true,
  setPlayerTurn: () => {},
  playerOneHand: [],
  playerTwoHand: [],
  selectedPiece: { value: -1, index: -1 },
  setSelectedPiece: () => {}
})

export const GameProvider = ({
  children,
  socket,
  gameOn,
  setGameOn,
  gameId,
  setGameId,
  playerId,
  round,
  setRound,
  playerOneName,
  playerTwoName,
  playerOne,
  playerTurn,
  setPlayerTurn
}: GameContextInterface) => {
  const [table, setTable] = useState([
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false}
  ])
  const [playerOneHand, setPlayerOneHand] = useState([1, 1, 2, 2, 3, 3])
  const [playerTwoHand, setPlayerTwoHand] = useState([1, 1, 2, 2, 3, 3])
  const [selectedPiece, setSelectedPiece] = useState({ value: -1, index: -1 })

  useEffect(() => {
    socket.on('newMove', (data: NewMoveInterface) => {
      if (data.gameId !== gameId || data.round <= round) return

      if (playerOne !== data.player) {
        const { player, pieceIndex, pieceValue, cell } = data
        updateTable(cell, pieceValue, player, table, setTable)

        if (player === true) removePieceFromHand(playerOneHand, setPlayerOneHand, pieceIndex)
        else removePieceFromHand(playerTwoHand, setPlayerTwoHand, pieceIndex)

        setPlayerTurn(!playerTurn)
        setRound(round + 1)
      }

      socket.emit('received', { message: 'thx for the message' })
    })
  }, [
    gameId,
    round,
    playerTurn,
    playerOne,
    table,
    setPlayerTurn,
    setRound,
    socket,
    playerOneHand,
    playerTwoHand
  ])

  useEffect(() => {
    if (checkEndGame(table)) endGame()
  }, [table])

  return (
    <GameContext.Provider value={{
      socket,
      gameOn,
      setGameOn,
      gameId,
      setGameId,
      playerId,
      round,
      setRound,
      playerOneName,
      playerTwoName,
      playerOne,
      playerTurn,
      setPlayerTurn,
      playerOneHand,
      playerTwoHand,
      selectedPiece,
      setSelectedPiece
    }}>
      {children}
    </GameContext.Provider>
  )
}
