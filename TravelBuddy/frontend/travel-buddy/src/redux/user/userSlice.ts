import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginData, IUser } from '../../types/applicationTypes';
import { ISliceState } from '../../types/reduxTypes';
import AuthApiService from '../../utils/services/AuthApiService';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState: ISliceState<IUser | null> = {
	data: null,
	loading: false,
	error: null,
};

const authApiService = new AuthApiService();

const getUser = createAsyncThunk(
	'user/getUser',
	async (loginData: ILoginData) => {
		console.log('inside getUser');
		const data = (await authApiService.login(loginData)).data;
		console.log('getUser => data => ', data);
		return data;
	},
);
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getUser.fulfilled,
				(state, action: PayloadAction<IUser | null>) => {
					state.loading = false;
					state.data = action.payload;
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
