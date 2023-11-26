namespace TravelBuddy.Domain.Entities
{
	public class Itinerary
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string? Description { get; set; } = null!;
	}
}