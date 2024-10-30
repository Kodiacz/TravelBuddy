namespace TravelBuddy.Application.Dtos.ActivityDtos
{
	public class GetActivityDto
	{
		public int Id { get; set; }

		public string Name { get; set; } = null!;

		public bool Done { get; set; }
	}
}
