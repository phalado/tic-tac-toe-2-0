import { connect } from "react-redux";
import Table from "../components/Table";

import StateInterface from "../interfaces/StateInterface";

const mapStateToProps = (state: StateInterface) => ({
  table: state.table,
});

export default connect(mapStateToProps, null)(Table);
