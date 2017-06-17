import { connect } from 'react-redux';
import ReduxPage from './ReduxPage.js';
import * as Actions from '../../actions/actions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = Actions;

export default connect( mapStateToProps, mapDispatchToProps )(ReduxPage);
