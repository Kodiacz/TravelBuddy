import { IItinerary } from '../../types/applicationTypes';
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
}
