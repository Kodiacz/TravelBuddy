namespace TravelBuddy.Domain.Entities
{
	public class Itinerary
	{
        public Itinerary()
        {
			this.Activities = new();
        }

        public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string? Description { get; set; } = null!;

		public List<Activities> Activities { get; set; }
	}
}