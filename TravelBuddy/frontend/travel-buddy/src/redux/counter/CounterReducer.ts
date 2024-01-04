import { Reducer, Action } from "redux";
import {
  CounterActionTypes,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "./models/actions";

import { Counter } from "./models/Counter";

const defaultState: Counter = {
  count: 0,
};

export const counterReducer: Reducer<Counter, CounterActionTypes> = (
  state = defaultState,
  action
) => {
  const nextState = {
    count: state.count,
  };

  switch (action.type) {
    case INCREMENT_COUNTER:
      nextState.count = state.count + 1;
      return nextState;
    case DECREMENT_COUNTER:
      nextState.count = state.count - 1;
      return nextState;
    default:
      return state;
  }
};
