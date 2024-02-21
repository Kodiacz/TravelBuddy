import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { ISliceState } from '../../types/reduxTypes';
import { IItinerary } from '../../types/applicationTypes';
import {
	getTripItineraries,
	updateItinerariesActivities,
} from './itineraryAsyncThunks';

const initialState: ISliceState<IItinerary[]> = {
	data: [],
	loading: false,
	error: null,
};

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
			})
			.addCase(updateItinerariesActivities.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateItinerariesActivities.fulfilled, (state, action) => {
				state.loading = false;
				// You might update the state accordingly based on the action payload
			})
			.addCase(updateItinerariesActivities.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred';
			});
	},
});

export default itinerarySlice.reducer;
export { getTripItineraries, toggleActivityDone };
