import { connect } from "react-redux";
import Cell from "../components/Cell";
import { changeCurrentPlayer, changeTableState, endGame, removePieceFromHandOne, removePieceFromHandTwo } from "../actions";
import TableInterface from "../interfaces/TableInterface";
import StateInterface from "../interfaces/StateInterface";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game,
  table: state.table,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo
});

const mapDispatchToProps = (dispatch: any) => ({
  changeTableState: (data: TableInterface[]) => dispatch(changeTableState(data)),
  changeCurrentPlayer: () => dispatch(changeCurrentPlayer()),
  removePieceFromHandOne: (pieces: number[]) => dispatch(removePieceFromHandOne(pieces)),
  removePieceFromHandTwo: (pieces: number[]) => dispatch(removePieceFromHandTwo(pieces)),
  endGame : () => dispatch(endGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);