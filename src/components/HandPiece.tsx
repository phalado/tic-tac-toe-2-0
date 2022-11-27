import React, { useContext, useEffect, useState } from "react";
import HandPieceInterface from "../interfaces/HandPiece";
import Piece from "./Piece";
import { GameContext } from "./GameContext";
import styles from "../styles/handPieceStyles";

const HandPiece = ({ playerNumber, value, index }: HandPieceInterface) => {
  const { playerTurn, playerOne, gameOn, selectedPiece, setSelectedPiece } = useContext(GameContext)
  const [disabled, setDisabled] = useState(playerNumber !== playerTurn || playerOne !== playerTurn || !gameOn)

  useEffect(() => {
    setDisabled(playerNumber !== playerTurn || playerOne !== playerTurn || !gameOn)
  }, [playerTurn, playerOne, gameOn, playerNumber])

  const handleOnClickButton = () => {
    (setSelectedPiece as (selectedPiece: { index: number, value: number }) => void)({ index, value })
  }
  
  const selected = playerNumber === playerTurn && index === (selectedPiece as { index: number, value: number }).index

  return (
    <button style={styles.button} disabled={disabled} onClick={handleOnClickButton}>
      <Piece color={playerNumber} value={value} handPiece disabled={disabled} selected={selected} />
    </button>
  )
}

export default HandPiece
