namespace TravelBuddy.Domain.Entities
{
	public class Activity
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public int ItineraryId { get; set; }
		public Itinerary Itinerary { get; set; } = null!;
	}
}
