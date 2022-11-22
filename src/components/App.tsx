import React from 'react';
import Game from '../containers/Game';
import { io } from 'socket.io-client'
import styles from "../styles/appStyles";
import AppInterface from '../interfaces/AppInterface';

const socket:any = io('http://localhost:1337')

const App = ({ game, playerOne, changeUserNameOne, changeUserNameTwo }: AppInterface) => {
  const { gameOn } = game

  const handleUsernameChange = (value: string) => changeUserNameOne(value)

  console.log(game, !!game.gameId)

  if (gameOn) return <Game />

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
        <button style={styles.button}>Create Game</button>
        <div style={styles.joinGameContainer}>
          <button style={styles.button}>Join Game</button>
          <input
            style={styles.input}
            title="Type here your friend's game ID"
            placeholder="Game ID"
          />
        </div>
      </main>
    </div>
  )
}

export default App;
