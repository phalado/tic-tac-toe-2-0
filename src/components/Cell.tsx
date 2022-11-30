import React, { useContext } from "react";
import CellInterface from "../interfaces/CellInterface";
import Piece from "./Piece";
import { submitNewMove } from "../services/socketServices";

import styles from "../styles/cellStyles";
import { GameContext } from "./GameContext";
import { io } from "socket.io-client";

const Cell = ({ value, color, index }: CellInterface) => {
  const {
    socket = io(process.env.REACT_APP_SERVER_URL as string),
    playerTurn = true,
    selectedPiece = { value: -1, index: -1 },
    gameOn = true,
    round = 0,
    gameId = '',
    updateTable = () => {},
    removePieceFromHandOne = () => {},
    removePieceFromHandTwo = () => {},
    setPlayerTurn = () => {},
    setRound = () => {},
  } = useContext(GameContext)

  const clickable = selectedPiece.value > value && gameOn
  
  const fillingValue = () => {
    if (value === 0) return null

    return <Piece color={color} value={value} />
  }

  const handleClickingCell = () => {
    updateTable(index, selectedPiece.value, playerTurn);

    if (playerTurn === true) removePieceFromHandOne(selectedPiece.index);
    else removePieceFromHandTwo(selectedPiece.index);

    submitNewMove(
      socket,
      round + 1,
      playerTurn,
      selectedPiece.index,
      selectedPiece.value,
      index,
      gameId
    );

    setPlayerTurn(!playerTurn);
    setRound(round + 1);
  }

  if (clickable) {
    return (
      <div style={{ ...styles.container, ...styles.clickable }} onClick={handleClickingCell}>
        {fillingValue()}
      </div>
    )
  }

  return <div style={styles.container}>{value > 0 && fillingValue()}</div>
}

export default Cell;
