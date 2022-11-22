import { connect } from "react-redux";
import App from "../components/App";

import StateInterface from "../interfaces/StateInterface";
import { changeToPlayerTwo, newGame, startGame } from "../slicers/gameSlicer";
import { changeUserNameOne } from "../slicers/playerOneSlicer";
import { changeUserNameTwo } from "../slicers/playerTwoSlicer";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game,
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeUserNameOne: (username: string) => dispatch(changeUserNameOne(username)),
  changeUserNameTwo: (username: string) => dispatch(changeUserNameTwo(username)),
  newGame: (data: { gameId: string, playerId: string }) => (
    dispatch(newGame(data))
  ),
  startGame: (data: { round: number, playerTurn: boolean }) => (
    dispatch(startGame(data))
  ),
  changeToPlayerTwo: () => dispatch(changeToPlayerTwo())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
