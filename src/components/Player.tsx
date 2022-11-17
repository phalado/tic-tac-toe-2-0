import React from "react";
import PlayerInterface from "../interfaces/PlayerInterface";
import HandPiece from "../containers/HandPiece";

import styles from "../styles/playerStyles";

const Player = ({playerNumber, playerOne, playerTwo}: PlayerInterface) => {
  let player: { username: string, pieces: number[] }
  let titleStyles;

  if (playerNumber) {
    player = playerOne;
    titleStyles = { ...styles.title, ...styles.playerOne }
  } else {
    player = playerTwo;
    titleStyles = { ...styles.title, ...styles.playerTwo }
  }

  return (
    <div style={styles.container}>
      <h2 style={titleStyles}>{player.username}</h2>
      <div style={styles.piecesContainer}>
        {player.pieces.map((value, index) => (
          <HandPiece playerNumber={playerNumber} value={value} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Player
