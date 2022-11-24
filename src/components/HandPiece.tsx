import React, { useContext, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import HandPieceInterface from "../interfaces/HandPiece";
import Piece from "./Piece";
import { GameContext } from "./GameContext";

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
    <Button disabled={disabled} onClick={handleOnClickButton}>
      <Piece color={playerNumber} value={value} handPiece disabled={disabled} selected={selected} />
    </Button>
  )
}

export default HandPiece
