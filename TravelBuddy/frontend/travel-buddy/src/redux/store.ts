import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/CounterReducer';
import { useDispatch } from 'react-redux';
import tripReducer from './trips/tripsSlice';
import itineraryReducer from './itinerary/itinerarySlice';

const logger = createLogger();

export const rootReducer = combineReducers({
	counterReducer,
	tripReducer,
	itineraryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
	reducer: rootReducer,
	// middleware: () =>
	// 	new Tuple(logger, thunk) as Tuple<Middlewares<{ counterReducer: Counter }>>,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
