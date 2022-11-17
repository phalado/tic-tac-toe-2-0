// import TableInterface from "../interfaces/TableInterface";

const table = (state: any = {}, action: { type: string, table: string[] }) => {
  switch (action.type) {
    case "CHANGE_TABLE_STATE":
      return [...action.table]
    default:
      return state;
  }
};

export default table;
