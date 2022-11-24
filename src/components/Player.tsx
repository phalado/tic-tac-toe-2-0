import React, { useContext } from "react";
import HandPiece from "../components/HandPiece";

import { GameContext } from "./GameContext";
import styles from "../styles/playerStyles";

const Player = ({ playerNumber }: { playerNumber: boolean }) => {
  const { playerOneName, playerTwoName, playerOneHand, playerTwoHand } = useContext(GameContext)
  let player: { username: string, hand: number[] }
  let titleStyles;

  if (playerNumber) {
    player = {
      username: playerOneName as string,
      hand: Object.assign([], playerOneHand as number[])
    };
    titleStyles = { ...styles.title, ...styles.playerOne }
  } else {
    player = {
      username: playerTwoName as string,
      hand: Object.assign([], playerTwoHand as number[])
    };
    titleStyles = { ...styles.title, ...styles.playerTwo }
  }

  console.log(player, player, playerOneName, playerOneHand, playerTwoHand)

  return (
    <div style={styles.container}>
      <h2 style={titleStyles}>{player.username}</h2>
      <div style={styles.piecesContainer}>
        {player.hand.map((value, index) => (
          <HandPiece playerNumber={playerNumber} value={value} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Player
