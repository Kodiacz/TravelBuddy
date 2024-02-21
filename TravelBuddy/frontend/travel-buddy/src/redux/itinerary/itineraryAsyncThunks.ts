import { createAsyncThunk } from '@reduxjs/toolkit';
import ItineraryApiService from '../../utils/services/ItinararyApiService';
import { ActivityPatchUpdate } from '../../types/applicationTypes';

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
		console.log('getTripItineraries => ', data);
		return data;
	},
);

const updateItinerariesActivities = createAsyncThunk(
	'itineraries-activities/patch',
	async (activitiesPatchDocuments: ActivityPatchUpdate[]) => {
		console.log(
			'createAsyncThunk => activitiesPatchDocuments => ',
			activitiesPatchDocuments,
		);
		await itinerartService.updateAllActivities(activitiesPatchDocuments);
	},
);

export { getTripItineraries, updateItinerariesActivities };
