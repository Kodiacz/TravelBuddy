namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IActivityService
	{
		Task AddActivity(AddActivityDto activityDto);

		Task<IEnumerable<GetActivityDto>> GetItineraryActivitiesAsync(int itineraryId);

		Task PatchUpdate(JsonPatchDocument activityDocument, int activityId);

		Task BulkyPatchUpdate(List<CustomPatchOperation> activityPatchOperations);
	}
}
