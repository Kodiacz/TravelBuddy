import { ITrip } from '../../types/applicationDbTypes';
import { ITripsSliceState } from '../../types/reduxTypes';
import TripApiService from '../../utils/services/TripApiService';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: ITripsSliceState = {
	trips: [],
	loading: true,
	error: null,
};

const tripApiService = new TripApiService();

const getTrips = createAsyncThunk('trips/getTrips', async (userId: string) => {
	const data = await tripApiService.fetchUserTrips(userId);
	return data;
});

const tripsSlice = createSlice({
	name: 'trips',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTrips.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getTrips.fulfilled, (state, action: PayloadAction<ITrip[]>) => {
				state.loading = false;
				state.trips = action.payload;
			})
			.addCase(getTrips.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred';
			});
	},
});

export default tripsSlice.reducer;
export { getTrips };
