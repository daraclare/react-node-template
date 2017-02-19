// This component handles all the global components that are used on every page.
import React, {PropTypes} from 'react';
import Header from './global/Header';

class Global extends React.Component {
  render() {
    return (
      <div >
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

Global.propTypes = {
  children: PropTypes.object.isRequired
};

export default Global;
