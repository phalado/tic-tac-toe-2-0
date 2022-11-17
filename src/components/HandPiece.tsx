import React from "react";
import Button from '@mui/material/Button';
import HandPieceInterface from "../interfaces/HandPiece";

const HandPiece = ({
  playerNumber,
  value,
  index,
  game,
  changeSelectedPiece
}: HandPieceInterface) => {
  const { currentPlayer, selectedPieceIndex, gameOn } = game;

  const handleOnClickButton = () => changeSelectedPiece({ index, value })
  
  const color = playerNumber ? 'primary' : 'secondary'
  const variant = (playerNumber === currentPlayer && index === selectedPieceIndex) ? 'contained' : 'outlined'
  const enabled = playerNumber === currentPlayer && gameOn

  return <Button color={color} variant={variant} disabled={!enabled} onClick={handleOnClickButton}>{value}</Button>
}

export default HandPiece
