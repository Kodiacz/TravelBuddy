import { AppState } from 'react-native';
import { ActivityPatchUpdate, IItinerary } from '../../types/applicationTypes';
import ApiService from './ApiService';

export default class ItineraryApiService extends ApiService {
	constructor() {
		super();
	}

	async getTripItineraries(tripId: number) {
		const data = await this.get<IItinerary[]>(
			`Itinerary/GetTripItineraries?tripId=${tripId}`,
		);
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
		console.log('inside updateAllActivities => ', activitiesPatchDocuments);
		await this.patch<ActivityPatchUpdate[]>(
			`Activity/BulkyPatchUpdateActivity`,
			JSON.stringify(activitiesPatchDocuments),
		);
	}
}
