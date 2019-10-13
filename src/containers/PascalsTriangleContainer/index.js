import { connect } from "react-redux";
import PascalsTriangle from "../../components/PascalsTriangle";

let mapStateToProps = state => {
  return { rows: state.rows, triangle: state.triangle };
};

const PascalsTriangleContainer = connect(mapStateToProps)(PascalsTriangle);

export default PascalsTriangleContainer;
