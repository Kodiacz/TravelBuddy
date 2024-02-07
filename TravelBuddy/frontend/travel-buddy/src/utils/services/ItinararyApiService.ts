import { IItinerary } from '../../types/applicationDbTypes';
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
}
