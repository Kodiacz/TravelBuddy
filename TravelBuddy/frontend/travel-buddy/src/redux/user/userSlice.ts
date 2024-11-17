import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginData, ILoginError, IUser } from '../../types/applicationTypes';
import { ISliceState } from '../../types/reduxTypes';
import AuthApiService from '../../utils/services/AuthApiService';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

// const initialState: ISliceState<IUser | null> = {
// 	data: null,
// 	loading: false,
// 	error: null,
// };

const initialState: {
	user: IUser | null;
	errorResponse: ILoginError | null;
	loading: boolean;
	error: string | null;
} = {
	user: null,
	errorResponse: null,
	loading: false,
	error: null,
};

const authApiService = new AuthApiService();

const getUser = createAsyncThunk(
	'user/getUser',
	async (loginData: ILoginData) => {
		const data = (await authApiService.login(loginData)).data;
		return data;
	},
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUser: (state) => {
			state.user = null;
			state.errorResponse = null;
			state.loading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getUser.fulfilled,
				(state, action: PayloadAction<IUser | ILoginError>) => {
					state.loading = false;
					if ('accessToken' in action.payload) {
						state.user = action.payload;
						state.errorResponse = null;
					} else {
						state.user = null;
						state.errorResponse = action.payload;
					}
				},
			)
			.addCase(getUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred';
			});
	},
});

const persistConfig = {
	key: 'user',
	storage: AsyncStorage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export default persistedUserReducer;
export { getUser };
export const { clearUser } = userSlice.actions;
