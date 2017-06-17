import { connect } from 'react-redux';
import ApiPage from './ApiPage.js';
import * as Actions from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(Actions.fetchApiData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage);
