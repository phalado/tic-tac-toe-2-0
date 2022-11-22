import { connect } from "react-redux";
import App from "../components/App";

import StateInterface from "../interfaces/StateInterface";
import { changeUserNameOne } from "../slicers/playerOneSlicer";
import { changeUserNameTwo } from "../slicers/playerTwoSlicer";

// import { changeTableState } from "../slicers/tableSlicer";
// import { changeCurrentPlayer, endGame } from "../slicers/gameSlicer";
// import { removePieceFromHandOne } from "../slicers/playerOneSlicer";
// import { removePieceFromHandTwo } from "../slicers/playerTwoSlicer";
// import TableInterface from "../interfaces/TableInterface";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeUserNameOne: (userName: string) => dispatch(changeUserNameOne(userName)),
  changeUserNameTwo: (userName: string) => dispatch(changeUserNameTwo(userName)),
//   changeTableState: (data: TableInterface[]) => dispatch(changeTableState(data)),
//   changeCurrentPlayer: () => dispatch(changeCurrentPlayer()),
//   removePieceFromHandOne: (pieces: number[]) => dispatch(removePieceFromHandOne(pieces)),
//   removePieceFromHandTwo: (pieces: number[]) => dispatch(removePieceFromHandTwo(pieces)),
//   endGame: () => dispatch(endGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
