namespace TravelBuddy.Domain.Entities
{
	public class Trip
	{
        public Trip()
        {
            this.Itineraries = new HashSet<Itinerary>();
            this.Guests = new HashSet<User>();
        }

        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public DateOnly Date { get; set; }

        public int UserId { get; set; }
        public User Creator { get; set; } = null!;

        public ICollection<User> Guests { get; set; }

		public ICollection<Itinerary> Itineraries { get; set; }

    }
}