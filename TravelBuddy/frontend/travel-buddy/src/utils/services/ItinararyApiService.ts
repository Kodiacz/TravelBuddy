import { IItinerary } from '../../types/applicationTypes';
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
}
