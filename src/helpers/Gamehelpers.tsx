import TableInterface from "../interfaces/TableInterface"

const horizontals = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const verticals = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

const diagonals = [
  [0, 4, 8],
  [2, 4, 6]
]

const checkVictoryCondition = (table: TableInterface[], conditions: number[][]) => (
  conditions.some(cond => (
    cond.every(index => table[index].value > 0 && table[index].color) ||
      cond.every(index => table[index].value > 0 && !table[index].color)
  ))
)

export const checkDraw = (table: TableInterface[], playerOneHand: number[], playerTwoHand: number[]) => (
  table.every(cell => cell.value > 0) || 
    (!playerOneHand.length && !playerTwoHand.length)
)

export const checkEndGame = (table: TableInterface[]) => (
  checkVictoryCondition(table, horizontals) ||
    checkVictoryCondition(table, verticals) ||
    checkVictoryCondition(table, diagonals)
)
