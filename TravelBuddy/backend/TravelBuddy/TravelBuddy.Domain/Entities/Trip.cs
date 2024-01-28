using TravelBuddy.Domain.Abstraction;

namespace TravelBuddy.Domain.Entities
{
	public class Trip : IDeletableEntity
	{
        public Trip()
        {
            this.Itineraries = new HashSet<Itinerary>();
            this.Guests = new HashSet<ApplicationUser>();
        }

        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public string? Image { get; set; }

        public DateTime StartDate { get; set; } = default;

        public DateTime EndDate { get; set; }

        public Guid CreatorId { get; set; }
        public ApplicationUser Creator { get; set; } = null!;

        public ICollection<ApplicationUser> Guests { get; set; }

		public ICollection<Itinerary> Itineraries { get; set; }

        public bool Deleted { get; set; } = false;

        public DateTime? DateDeleted { get; set; }

        public string? TravellingBy { get; set; } = null!;

        public string? Accommodation { get; set; } = null!;
    }
}
