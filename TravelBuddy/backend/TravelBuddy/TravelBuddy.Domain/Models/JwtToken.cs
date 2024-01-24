namespace TravelBuddy.Domain.Models
{
	public class JwtToken
	{
		public JwtToken()
		{
			this.UserId = new Guid();
		}

		public Guid UserId { get; set; }

		public string AccessToken { get; set; } = null!;

		public string Email { get; set; } = null!;

		public string? ProfileImage { get; set; }

		public string Role { get; set; }

	}
}
