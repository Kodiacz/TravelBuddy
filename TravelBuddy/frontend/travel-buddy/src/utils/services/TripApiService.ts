import { ITrip } from '../../types/applicationDbTypes';
import ApiService from './ApiService';

export default class TripApiService extends ApiService {
	constructor() {
		super();
	}

	async fetchUserTrips(userId: string) {
		return await this.get<ITrip[]>(`Trip/GetUserTrip?userId=${userId}`);
	}
}
