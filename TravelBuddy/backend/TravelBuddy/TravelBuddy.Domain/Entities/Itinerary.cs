using TravelBuddy.Domain.Abstraction;

namespace TravelBuddy.Domain.Entities
{
	public class Itinerary : IDeletableEntity
	{
        public Itinerary()
        {
			this.Activities = new HashSet<Activity>();
        }

        public int Id { get; set; }

		public string Name { get; set; } = null!;

		public DateTime Date { get; set; }	

		public int TripId { get; set; }
		public Trip Trip { get; set; } = null!;

		public ICollection<Activity> Activities { get; set; }

		public bool Deleted { get; set; } = false;

		public DateTime? DateDeleted { get; set; }
	}
}