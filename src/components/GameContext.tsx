import React, { createContext, useEffect, useState } from 'react'
import { checkEndGame } from '../helpers/Gamehelpers'
import GameContextInterface from '../interfaces/GameContextInterface'
import NewMoveInterface from '../interfaces/NewMoveInterface'
import { io } from 'socket.io-client'

export const GameContext = createContext<GameContextInterface>({
  socket: io(process.env.REACT_APP_SERVER_URL as string),
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
  table: [],
  playerOneHand: [],
  playerTwoHand: [],
  updateTable: () => {},
  removePieceFromHandOne: () => {},
  removePieceFromHandTwo: () => {},
  selectedPiece: { value: -1, index: -1 },
  setSelectedPiece: () => {},
  endGame: () => {},
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
  setPlayerTurn,
  table,
  playerOneHand,
  playerTwoHand,
  updateTable,
  removePieceFromHandOne,
  removePieceFromHandTwo,
  endGame,
}: GameContextInterface) => {
  const [selectedPiece, setSelectedPiece] = useState({ value: -1, index: -1 })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) return;

    socket.on('newMove', (data: NewMoveInterface) => {
      if (data.gameId !== gameId || data.round <= round) return

      if (playerOne !== data.player) {
        const { player, pieceIndex, pieceValue, cell } = data
        updateTable(cell, pieceValue, player)

        if (player === true) removePieceFromHandOne(pieceIndex)
        else removePieceFromHandTwo(pieceIndex)

        setPlayerTurn(!playerTurn)
        setRound(round + 1)
      }

      setLoading(true)
    })
  }, [
    gameId,
    round,
    playerTurn,
    playerOne,
    table,
    setPlayerTurn,
    setRound,
    playerOneHand,
    playerTwoHand,
    removePieceFromHandOne,
    removePieceFromHandTwo,
    updateTable,
    loading,
    socket
  ])

  useEffect(() => {
    if (checkEndGame(table)) endGame()
  }, [table, endGame])

  useEffect(() => {
    setSelectedPiece({ index: -1, value: -1 })
  }, [playerOneHand, playerTwoHand])

  useEffect(() => setLoading(false), [playerTurn])

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
      table,
      playerOneHand,
      playerTwoHand,
      updateTable,
      removePieceFromHandOne,
      removePieceFromHandTwo,
      selectedPiece,
      setSelectedPiece,
      endGame,
    }}>
      {children}
    </GameContext.Provider>
  )
}
