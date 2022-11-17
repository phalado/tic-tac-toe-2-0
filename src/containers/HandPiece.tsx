import { connect } from "react-redux";
import { changeSelectedPiece } from "../actions";

import HandPiece from "../components/HandPiece";
import StateInterface from "../interfaces/StateInterface";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game
});

const mapDispatchToProps = (dispatch: any) => ({
  changeSelectedPiece: (selectedPiece: { index: number, value: number }) => {
    dispatch(changeSelectedPiece(selectedPiece))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HandPiece);
