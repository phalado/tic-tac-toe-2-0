/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react'
import { checkDraw, checkEndGame } from '../helpers/Gamehelpers'
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
  endGameModalOpen: false,
  setEndGameModalOpen: () => {},
  victor: '',
  score: [],
  returnToHomepage: () => {},
  newGameStart: () => {}
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
  endGameModalOpen,
  setEndGameModalOpen,
  returnToHomepage,
  newGameStart
}: GameContextInterface) => {
  const [selectedPiece, setSelectedPiece] = useState({ value: -1, index: -1 })
  const [loading, setLoading] = useState(false)
  const [victor, setVictor] = useState('')
  const [score, setScore] = useState([0, 0])

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
    socket.on('newGameStart', data => newGameStart(data.playerTurn))
  }, [])

  useEffect(() => {
    if (checkEndGame(table)) {
      if (playerTurn) {
        setVictor(playerTwoName)
        setScore(scr => [scr[0], scr[1] + 1])
      } else {
        setVictor(playerOneName)
        setScore(scr =>  [scr[0] + 1, scr[1]])
      }

      setTimeout(() => endGame(), 1000)
    } else if (checkDraw(table, playerOneHand, playerTwoHand)) {
      setVictor('draw')
      endGame()
    }
  }, [table])

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
      endGameModalOpen,
      setEndGameModalOpen,
      victor,
      score,
      returnToHomepage,
      newGameStart
    }}>
      {children}
    </GameContext.Provider>
  )
}
