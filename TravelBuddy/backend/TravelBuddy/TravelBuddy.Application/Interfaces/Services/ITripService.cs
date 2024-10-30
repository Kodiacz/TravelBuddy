namespace TravelBuddy.Application.Interfaces.Services
{
	public interface ITripService
	{
		Task AddTrip(AddTripDto tripDto);

		Task<IEnumerable<GetTripDto>> GetUserTrips(Guid userId);
	}
}
