import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISliceState } from '../../types/reduxTypes';
import ItineraryApiService from '../../utils/services/ItinararyApiService';
import { IItinerary, ITrip } from '../../types/applicationDbTypes';

const initialState: ISliceState<IItinerary[]> = {
	data: [],
	loading: false,
	error: null,
};

const itinerartService = new ItineraryApiService();

const getTripItineraries = createAsyncThunk(
	'itineraries/get',
	async (tripId: number) => {
		const data = await itinerartService.getTripItineraries(tripId);
		return data;
	},
);

const itinerarySlice = createSlice({
	name: 'trips',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTripItineraries.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getTripItineraries.fulfilled,
				(state, action: PayloadAction<IItinerary[]>) => {
					state.loading = false;
					state.data = action.payload;
				},
			)
			.addCase(getTripItineraries.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred';
			});
	},
});

export default itinerarySlice.reducer;
export { getTripItineraries };
