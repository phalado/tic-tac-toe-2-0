import { connect } from "react-redux";
import Player from "../components/Player";
import StateInterface from "../interfaces/StateInterface";

const mapStateToProps = (state: StateInterface) => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

export default connect(mapStateToProps, null)(Player);
