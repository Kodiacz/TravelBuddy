namespace TravelBuddy.Application.Dtos.ActivityDtos
{
	public class GetActivityDto
	{
		int Id { get; }

		public string Name { get; set; } = null!;

		public bool Done { get; set; }
	}
}
