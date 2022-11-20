import { connect } from "react-redux";
import HandPiece from "../components/HandPiece";

import StateInterface from "../interfaces/StateInterface";

import { changeSelectedPiece } from "../slicers/gameSlicer";

const mapStateToProps = (state: StateInterface) => ({
  game: state.game
});

const mapDispatchToProps = (dispatch: any) => ({
  changeSelectedPiece: (selectedPiece: { index: number, value: number }) => {
    dispatch(changeSelectedPiece(selectedPiece))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HandPiece);
