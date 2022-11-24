import TableInterface from "../interfaces/TableInterface";

export const removePieceFromHand = (
  playerPieces: number[],
  removeMethod: (newPieces: number[]) => void,
  pieceIndex: number
) => {
  const newPieces = Object.assign([], playerPieces);
  newPieces.splice(pieceIndex, 1)
  removeMethod(newPieces)
}

export const updateTable = (
  cell: number,
  value: number,
  color: boolean,
  table: TableInterface[],
  setTable: (table: TableInterface[]) => void
) => {
  const newTable: TableInterface[] = Object.assign([], table);
  newTable[cell] = { value: value, color: color }
  setTable(newTable)
}
