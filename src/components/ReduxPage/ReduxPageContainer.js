import { connect } from "react-redux";
import ReduxPage from "./ReduxPage.js";
import * as Actions from "../../actions/actions";

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = {
  increment: Actions.increment,
  decrement: Actions.decrement,
  fetchApiData: Actions.fetchApiData
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
