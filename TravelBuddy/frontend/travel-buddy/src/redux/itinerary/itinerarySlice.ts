import {
	PayloadAction,
	createAction,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';
import { ISliceState } from '../../types/reduxTypes';
import ItineraryApiService from '../../utils/services/ItinararyApiService';
import { IItinerary, ITrip } from '../../types/applicationTypes';

const initialState: ISliceState<IItinerary[]> = {
	data: [],
	loading: false,
	error: null,
};

const itinerartService = new ItineraryApiService();

const getTripItineraries = createAsyncThunk(
	'itineraries/get',
	async ({
		orderBy,
		userId,
		searchTerm,
	}: {
		searchTerm?: string;
		orderBy: number;
		userId: string;
	}) => {
		const data = await itinerartService.getAllTripsItineraries(
			searchTerm,
			orderBy,
			userId,
		);
		return data;
	},
);

const toggleActivityDone = createAction<{
	itineraryId: number;
	activityName: string;
}>('itineraries/toggleActivityDone');

const itinerarySlice = createSlice({
	name: 'itineraries',
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
			})
			.addCase(toggleActivityDone, (state, action) => {
				const { itineraryId, activityName } = action.payload;
				const itinerary = state.data!.find(
					(itinerary) => itinerary.id === itineraryId,
				);
				if (itinerary) {
					const activity = itinerary.activities.find(
						(x) => x.name === activityName,
					);

					if (activity) {
						activity.done = !activity.done;
					}
				}
			});
	},
});

export default itinerarySlice.reducer;
export { getTripItineraries, toggleActivityDone };
