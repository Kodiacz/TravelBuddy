namespace TravelBuddy.Domain.Entities
{
	public class Trip
	{
        public Trip()
        {
            this.Itineraries = new HashSet<Itinerary>();
            this.Guests = new HashSet<IUser>();
        }

        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public string? Image { get; set; }

		public DateTime Date { get; set; }

        public int CreatorId { get; set; }
        public IUser Creator { get; set; } = null!;

        public ICollection<IUser> Guests { get; set; }

		public ICollection<Itinerary> Itineraries { get; set; }
    }
}