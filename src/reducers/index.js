import calculatePascalsTriangle from "../helpers/calculatePascalsTriangle";

let triangle = (state = { rows: 0, triangle: [] }, action) => {
  switch (action.type) {
    case "increaseRow":
      return {
        rows: state.rows + 1,
        triangle: calculatePascalsTriangle(state.rows + 1),
      };
    case "decreaseRow":
      return {
        rows: state.rows - 1,
        triangle: calculatePascalsTriangle(state.rows - 1),
      };
    default:
      return state;
  }
};

export default triangle;
