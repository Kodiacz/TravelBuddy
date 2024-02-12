import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import tripReducer from './trips/tripsSlice';
import itineraryReducer from './itinerary/itinerarySlice';
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import { useSelector } from 'react-redux';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

const logger = createLogger();

export const rootReducer = combineReducers({ counterReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	middleware: () =>
		new Tuple(logger) as Tuple<Middlewares<{ counterReducer: Counter }>>,
});
