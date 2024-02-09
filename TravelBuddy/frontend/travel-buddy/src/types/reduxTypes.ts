import { IItinerary, ITrip } from './applicationDbTypes';

interface ITripsSliceState {
	trips: ITrip[];
	loading: boolean;
	error: string | null | undefined;
}

interface IItinerarySliceState {
	itineraries: IItinerary[];
	loading: boolean;
	error: string | null | undefined;
}

interface IUserSliceState {}

interface ISliceState<T> {
	data: T | null;
	loading: boolean;
	error: string | null | undefined;
}

export { ITripsSliceState, IItinerarySliceState, ISliceState };
