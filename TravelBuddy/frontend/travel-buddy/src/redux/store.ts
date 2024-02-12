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

export const rootReducer = combineReducers({
	tripReducer,
	itineraryReducer,
	userReducer,
});

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const persistedReducer = persistReducer(, rootReducer);

export type AppReducers = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof reduxStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const reduxStore = configureStore({
	reducer: rootReducer,
	// middleware: () =>
	// 	new Tuple(logger, thunk) as Tuple<Middlewares<{ counterReducer: Counter }>>,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			logger,
		}),
});

export const persistedStore = persistStore(reduxStore);
