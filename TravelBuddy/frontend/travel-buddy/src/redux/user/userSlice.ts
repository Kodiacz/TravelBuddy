import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginData, IUser } from '../../types/applicationDbTypes';
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
		const data = (await authApiService.login(loginData)).data;
		console.log('userSlice => getUser => data => ', data);
		return data;
	},
);
console.log('userSlice => initilaState => ', initialState);
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				console.log('pending => state ', state);
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getUser.fulfilled,
				(state, action: PayloadAction<IUser | null>) => {
					console.log('fulfilled => state ', state);
					console.log('fulfilled => action ', action);
					state.loading = false;
					state.data = action.payload;
				},
			)
			.addCase(getUser.rejected, (state, action) => {
				console.log('rejected => state ', state);
				console.log('rejected => action ', action);
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
