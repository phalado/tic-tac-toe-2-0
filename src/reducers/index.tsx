import { combineReducers } from "redux";

import playerOne from "./playerOne";
import playerTwo from "./playerTwo";
import game from "./game";
import table from "./table";

const rootReducer = combineReducers({
  playerOne,
  playerTwo,
  game,
  table
});

export default rootReducer