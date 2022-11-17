import TableInterface from "../interfaces/TableInterface";

export const changeTableState = (table: TableInterface) => ({
  type: "CHANGE_TABLE_STATE",
  table
})
