using System.Diagnostics;
using TravelBuddy.Domain.Abstraction;

namespace TravelBuddy.Domain.Entities
{
	[DebuggerDisplay("Count = {Id}, Name = {Name}")]
	public class Activity : IDeletableEntity
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public bool Done { get; set; } = false;

		public int ItineraryId { get; set; }
		public Itinerary Itinerary { get; set; } = null!;

		public bool Deleted { get; set; } = false;

		public DateTime? DateDeleted { get; set; }
	}
}
