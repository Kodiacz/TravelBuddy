import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { configureStore, Tuple, Middleware } from "@reduxjs/toolkit";

import { counterReducer } from "./counter/CounterReducer";
import { Middlewares } from "@reduxjs/toolkit/dist/configureStore";
import { Counter } from "./counter/models/Counter";

const logger = createLogger();

export const rootReducer = combineReducers({ counterReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    new Tuple(logger) as Tuple<Middlewares<{ counterReducer: Counter }>>,
});
