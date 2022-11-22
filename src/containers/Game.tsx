import { connect } from "react-redux";
import Game from "../components/Game";

import StateInterface from "../interfaces/StateInterface";

import { changeTableState } from "../slicers/tableSlicer";
import { changeCurrentPlayer, endGame } from "../slicers/gameSlicer";
import { removePieceFromHandOne } from "../slicers/playerOneSlicer";
import { removePieceFromHandTwo } from "../slicers/playerTwoSlicer";
import TableInterface from "../interfaces/TableInterface";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game,
  table: state.table,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeTableState: (data: TableInterface[]) => dispatch(changeTableState(data)),
  changeCurrentPlayer: () => dispatch(changeCurrentPlayer()),
  removePieceFromHandOne: (pieces: number[]) => dispatch(removePieceFromHandOne(pieces)),
  removePieceFromHandTwo: (pieces: number[]) => dispatch(removePieceFromHandTwo(pieces)),
  endGame: () => dispatch(endGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
