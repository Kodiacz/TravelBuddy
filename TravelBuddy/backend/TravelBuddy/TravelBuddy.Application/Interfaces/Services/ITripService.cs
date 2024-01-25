using TravelBuddy.Application.Dtos.TripDtos;

namespace TravelBuddy.Application.Interfaces.Services
{
	public interface ITripService
	{
		Task AddTrip(Trip trip);

		Task<IEnumerable<GetTripDto>> GetUserTrips(Guid userId);
	}
}
