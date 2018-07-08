import * as types from "../actions/actions.js";

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload.counter;

    case types.DECREMENT:
      return state - action.payload.counter;

    default:
      return state;
  }
}
