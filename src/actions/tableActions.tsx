import TableInterface from "../interfaces/TableInterface";

export const changeTableState = (data: TableInterface[]) => ({
  type: "CHANGE_TABLE_STATE",
  table: data
})
