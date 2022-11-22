import React, { useEffect, useState } from 'react';
import Game from '../containers/Game';
import { io } from 'socket.io-client'
import styles from "../styles/appStyles";
import AppInterface from '../interfaces/AppInterface';
import GameStartInterface from '../interfaces/GameStartInterface';

const socket:any = io('http://localhost:1337')

const App = ({
  game,
  playerOne,
  changeUserNameOne,
  changeUserNameTwo,
  newGame,
  startGame,
  changeToPlayerTwo
}: AppInterface) => {
  const { gameOn, gameId } = game
  const [username, setUsername] = useState(playerOne.username)

  useEffect(() => {
    socket.on('gameCreated', (data: { gameId: string, playerId: string }) => {
      if (gameOn === true || gameId) return

      newGame(data)
    })

    socket.on('gameStart', (data: GameStartInterface) => {
      if (gameOn === true || data.gameId !== gameId) return

      changeUserNameOne(data.playerOne)
      changeUserNameTwo(data.playerTwo)
      startGame({ round: data.round, playerTurn: data.playerTurn })
    })
  }, [gameId, gameOn, newGame, changeUserNameOne, changeUserNameTwo, startGame])

  const handleUsernameChange = (value: string) => {
    setUsername(value)
    changeUserNameOne(value)
  }

  const handleCreateGame = () => socket.emit('createGame', { playerOne: username })

  const handleJoinGame = () => {
    const joinGameId: string = (document.getElementById('join-game-input') as HTMLInputElement).value

    newGame({ gameId: joinGameId, playerId: joinGameId + 'B' })
    changeUserNameTwo(username)
    changeUserNameOne('')
    changeToPlayerTwo()
    socket.emit('joinGame', { gameId: joinGameId, playerTwo: username })
  }

  if (gameOn) return <Game />

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
            defaultValue={playerOne.username}
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
