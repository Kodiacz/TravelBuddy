namespace TravelBuddy.Application.Dtos.TripDtos
{
	public class AddTripDto
	{
		public string Name { get; set; } = null!;

		public string? Image { get; set; }

		public DateTime StartDate { get; set; } = default;

		public DateTime EndDate { get; set; }

		public Guid CreatorId { get; set; }

		public string? TravellingBy { get; set; } = null!;

		public string? Accommodation { get; set; } = null!;
	}
}
