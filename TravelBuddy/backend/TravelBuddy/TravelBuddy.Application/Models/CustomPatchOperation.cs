namespace TravelBuddy.Application.Models
{
	public class CustomPatchOperation
	{
		public string EntityId { get; set; } = null!;

		public string Path { get; set; } = null!;

		public string Value { get; set; } = null!;

		public string Op { get; set; } = null!;
	}
}
