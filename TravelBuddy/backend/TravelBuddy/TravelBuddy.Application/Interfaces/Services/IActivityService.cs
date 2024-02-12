namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IActivityService
	{
		Task AddActivity(AddActivityDto activityDto);

		Task<IEnumerable<GetActivityDto>> GetItineraryActivitiesAsync(int itineraryId);
	}
}
