import { AppState } from 'react-native';
import { ActivityPatchUpdate, IItinerary } from '../../types/applicationTypes';
import ApiService from './ApiService';

export default class ItineraryApiService extends ApiService {
	constructor() {
		super();
	}

	async getTripItineraries(tripId: number) {
		console.log('inside getTripItineraries');
		const data = await this.get<IItinerary[]>(
			`Itinerary/GetTripItineraries?tripId=${tripId}`,
		);
		console.log('getTripItineraries => data => ', data);
		return data;
	}

	async getAllTripsItineraries(
		searchTerm: string = '',
		sortBy: number = 0,
		userId: string,
	) {
		const data = await this.get<IItinerary[]>(
			`Itinerary/GetAllUserTripsItineraries?SearchTerm=${searchTerm}&OrderBy=${sortBy}&UserId=${userId}`,
		);
		return data;
	}

	async updateAllActivities(activitiesPatchDocuments: ActivityPatchUpdate[]) {
		await this.patch<ActivityPatchUpdate[]>(
			`Activity/BulkyPatchUpdateActivity`,
			JSON.stringify(activitiesPatchDocuments),
		);
	}
}
