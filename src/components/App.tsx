import React, { useEffect, useState } from 'react';
import Game from '../containers/Game';
import { GameProvider } from './GameContext';

import { io, Socket } from 'socket.io-client'
import styles from "../styles/appStyles";
import GameStartInterface from '../interfaces/GameStartInterface';

const socket:Socket = io('http://localhost:1337')

const App = () => {
  const [gameOn, setGameOn] = useState(false)
  const [gameId, setGameId] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [round, setRound] = useState(0)
  const [playerOneName, setPlayerOneName] = useState('Mario')
  const [playerTwoName, setPlayerTwoName] = useState('Luigi')
  const [playerOne, setPlaerOne] = useState(true)
  const [playerTurn, setPlayerTurn] = useState(true)


  useEffect(() => {
    socket.on('gameCreated', (data: { gameId: string, playerId: string }) => {
      if (gameOn === true || gameId) return

      setGameId(data.gameId)
      setPlayerId(data.playerId)
    })

    socket.on('gameStart', (data: GameStartInterface) => {
      if (gameOn === true || data.gameId !== gameId) return

      setPlayerOneName(data.playerOne)
      setPlayerTwoName(data.playerTwo)
      setGameOn(true)
      setRound(data.round)
      setPlayerTurn(data.playerTurn)
    })
  }, [gameId, gameOn])

  const handleUsernameChange = (value: string) => setPlayerOneName(value)

  const handleCreateGame = () => socket.emit('createGame', { playerOne: playerOneName })

  const handleJoinGame = () => {
    const joinGameId: string = (document.getElementById('join-game-input') as HTMLInputElement).value

    setGameId(joinGameId)
    setPlayerId(joinGameId + 'B')
    setPlayerTwoName(playerOneName)
    setPlayerOneName('Mario')
    setPlaerOne(false)
    socket.emit('joinGame', { gameId: joinGameId, playerTwo: playerOneName })
  }

  if (gameOn) return (
    <GameProvider
      socket={socket}
      gameOn={gameOn}
      setGameOn={setGameOn}
      gameId={gameId}
      setGameId={setGameId}
      playerId={playerId}
      round={round}
      setRound={setRound}
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      playerOne={playerOne}
      playerTurn={playerTurn}
      setPlayerTurn={setPlayerTurn}
    >
      <Game />
    </GameProvider>
  )

  if (gameId) return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        <div>
          <h1 style={styles.waitingTitle}>
            Game ID: <span style={styles.gameId}>{gameId}</span>
          </h1>
        </div>
        <h1 style={styles.waitingTitle}>Waiting for player 2's conection</h1>
      </main>
    </div>
  )

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.usernameContainer}>
          <h2 style={styles.label}>Change username: </h2>
          <input
            defaultValue={playerOneName}
            style={styles.input}
            onChange={e => handleUsernameChange(e.target.value)}
            title='Just type here your new username'
          />
        </div>
        <button style={styles.button} onClick={handleCreateGame}>Create Game</button>
        <div style={styles.joinGameContainer}>
          <button style={styles.button} onClick={handleJoinGame}>Join Game</button>
          <input
            style={styles.input}
            title="Type here your friend's game ID"
            placeholder='Game ID'
            id='join-game-input'
          />
        </div>
      </main>
    </div>
  )
}

export default App;
