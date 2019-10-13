import calculatePascalsTriangle from "../helpers/calculatePascalsTriangle";

let triangle = (state = { rows: 0, triangle: [] }, action) => {
  switch (action.type) {
    case "increaseRow":
      return {
        rows: state.rows + 1,
        triangle: [...state.triangle]
      };
    case "decreaseRow":
      return {
        rows: state.rows - 1,
        triangle: [...state.triangle]
      };
    case "updateRow":
      return {
        rows: state.rows,
        triangle: calculatePascalsTriangle(state.rows)
      };
    default:
      return state;
  }
};

export default triangle;
