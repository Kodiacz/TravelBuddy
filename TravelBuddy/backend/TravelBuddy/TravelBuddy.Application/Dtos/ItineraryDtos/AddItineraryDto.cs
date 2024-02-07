namespace TravelBuddy.Application.Dtos.ItineraryDtos
{
	public class AddItineraryDto
	{
		public string Name { get; set; } = null!;

		public DateTime Date { get; set; }

		public int TripId { get; set; }
	}
}
