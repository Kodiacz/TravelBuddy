namespace TravelBuddy.Application.Dtos.TripDtos
{
	public class GetTripDto
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public string Creator { get; set; } = null!;

		public DateTime Date { get; set; }
	}
}
