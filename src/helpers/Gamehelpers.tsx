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
    cond.every(index => (table as any)[index].value > 0 && (table as any)[index].color) ||
      cond.every(index => (table as any)[index].value > 0 && !(table as any)[index].color)
  ))
)

export const checkEndGame = (table: TableInterface[]) => {
    return (checkVictoryCondition(table, horizontals) ||
      checkVictoryCondition(table, verticals) ||
      checkVictoryCondition(table, diagonals))
}
