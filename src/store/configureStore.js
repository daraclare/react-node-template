import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
    //enable Redux Dev Tool Extension in DEVELOPMENT
    DEVELOPMENT ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null, //eslint-disable-line
  );

// remove <Provider> cannot update store error on https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
