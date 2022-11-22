import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import HandPieceInterface from "../interfaces/HandPiece";
import Piece from "./Piece";

const HandPiece = ({
  playerNumber,
  value,
  index,
  game,
  changeSelectedPiece
}: HandPieceInterface) => {
  const { playerTurn, selectedPieceIndex, gameOn, player } = game;
  const [disabled, setDisabled] = useState(playerNumber !== playerTurn || player !== playerTurn || !gameOn)

  useEffect(() => {
    setDisabled(playerNumber !== playerTurn || player !== playerTurn || !gameOn)
  }, [playerTurn, player, gameOn, playerNumber])

  const handleOnClickButton = () => changeSelectedPiece({ index, value })
  
  const selected = playerNumber === playerTurn && index === selectedPieceIndex

  return (
    <Button disabled={disabled} onClick={handleOnClickButton}>
      <Piece color={playerNumber} value={value} handPiece disabled={disabled} selected={selected} />
    </Button>
  )
}

export default HandPiece
