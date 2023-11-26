namespace TravelBuddy.Domain.Entities
{
	public class Travel
	{
        public Travel()
        {
            this.Itineraries = new List<Itinerary>();
            this.Guests = new List<User>();
        }

        public int Id { get; set; }

        public string Name { get; set; } = null!;

		public string? Description { get; set; } 

		public User Creator { get; set; } = null!;

        public List<User> Guests { get; set; }

		public List<Itinerary> Itineraries { get; set; }

    }
}