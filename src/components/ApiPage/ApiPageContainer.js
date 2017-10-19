import { connect } from "react-redux";
import ApiPage from "./ApiPage.js";
import * as Actions from "../../actions/actions";

const mapStateToProps = state => {
  return {
    apiData: state.apiData
  };
};

const mapDispatchToProps = {
  fetchData: Actions.fetchApiData
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage);
