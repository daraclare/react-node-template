import * as types from '../actions/actions.js';

export function apiData(state = [], action) {

  switch (action.type) {

    case types.FETCH_API:
      return action.payload.apiData;

    default:
      return state;

  }
}
