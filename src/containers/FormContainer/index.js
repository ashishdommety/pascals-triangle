import { connect } from "react-redux";
import Form from "../../components/Form";

import { increaseRows, decreaseRows, updateRows } from "../../actions";

let mapStateToProps = state => {
  return { state };
};

let mapDispatchToProps = dispatch => {
  return {
    increaseRow: function() {
      dispatch(increaseRows());
    },
    decreaseRow: function() {
      dispatch(decreaseRows());
    },
    updateRow: function() {
      dispatch(updateRows());
    }
  };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
export default FormContainer;
