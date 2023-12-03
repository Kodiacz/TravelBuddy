namespace TravelBuddy.Domain.Entities
{
	public class Itinerary
	{
        public Itinerary()
        {
			this.Activities = new HashSet<Activity>();
        }

        public int Id { get; set; }

		public string Name { get; set; } = null!;

		public DateTime Date { get; set; }

		public ICollection<Activity> Activities { get; set; }
	}
}