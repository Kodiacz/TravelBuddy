﻿namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IItineraryService
	{
		Task<IEnumerable<GetItineraryDto>> GetTripItineraries(int tripId);

		Task AddItinerary(AddItineraryDto ItineraryDto);
	}
}
