import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { GameContext } from "./GameContext";
import { io } from 'socket.io-client'

import styles from "../styles/endGameModalStyles"

const EndGameModal = () => {
  const {
    endGameModalOpen = false,
    victor = 'Mario',
    score = [],
    playerOneName = 'Mario',
    playerTwoName = 'Luigi',
    returnToHomepage = () => {},
    socket = io(process.env.REACT_APP_SERVER_URL as string),
    playerOne = true,
    gameId = ''
  } = useContext(GameContext)

  Modal.setAppElement("#root");

  const [playAgain, setPlayAgain] = useState(false)

  useEffect(() => {
    if (endGameModalOpen === false) setPlayAgain(false)
  }, [endGameModalOpen])

  const handlePlayAgain = () => {
    setPlayAgain(true)
    socket.emit('playAgain', { gameId , player: playerOne })
  }

  return (
    <div>
      <Modal
        isOpen={endGameModalOpen}
        style={styles}
        contentLabel="Game Over"
      >
        <h1 style={styles.title}>
          {victor === 'draw' ? 'Game draw!!!' : victor + ' won!!!'}
        </h1>
        <div style={styles.scoreboard}>
          <div style={styles.playerOneScoreContainer}>
            <h4 style={styles.playerOneScore}>{score[0]}</h4>
            <div style={styles.playerOneName}>{playerOneName}</div>
          </div>
          <div style={styles.playerTwoScoreContainer}>
            <h4 style={styles.playerTwoScore}>{score[1]}</h4>
            <div style={styles.playerTwoName}>{playerTwoName}</div>
          </div>
        </div>
        <div style={styles.buttonsContainer}>
          <button style={styles.button} onClick={handlePlayAgain} disabled={playAgain}>
            {playAgain ? 'Waiting for the other player...' : 'Play Again'}
          </button>
          <button
            style={styles.button}
            onClick={() => window.confirm('Return to homepage?') && returnToHomepage()}
          >Homepage</button>
        </div>
      </Modal>
    </div>
  )
}

export default EndGameModal
