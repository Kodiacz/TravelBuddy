namespace TravelBuddy.Application.Dtos.TripDtos
{
	public class GetTripDto
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string Creator { get; set; } = null!;

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public string? TravellingBy { get; set; } = null!;

		public string? Accommodation { get; set; } = null!;

		public string? Image { get; set; }
	}
}
