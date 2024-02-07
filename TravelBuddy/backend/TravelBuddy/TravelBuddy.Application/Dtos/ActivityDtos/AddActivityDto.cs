namespace TravelBuddy.Application.Dtos.ActivityDtos
{
	public class AddActivityDto
	{
		public string Name { get; set; } = null!;

		public int ItineraryId { get; set; }
	}
}
