import React, { createContext, useEffect, useState } from 'react'
import { checkEndGame } from '../helpers/Gamehelpers'
import GameContextInterface from '../interfaces/GameContextInterface'
import NewMoveInterface from '../interfaces/NewMoveInterface'
import { io, Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:1337')

export const GameContext = createContext<GameContextInterface>({
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
      console.log(data, loading, round, data.gameId !== gameId, data.round <= round, playerOne, data.player)
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
    playerOneHand,
    playerTwoHand,
    removePieceFromHandOne,
    removePieceFromHandTwo,
    updateTable,
    loading
  ])

  useEffect(() => {
    console.log('here')
    if (checkEndGame(table)) endGame()
  }, [table, endGame])

  useEffect(() => {
    setSelectedPiece({ index: -1, value: -1 })
  }, [playerOneHand, playerTwoHand])

  useEffect(() => setLoading(false), [playerTurn])

  return (
    <GameContext.Provider value={{
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
