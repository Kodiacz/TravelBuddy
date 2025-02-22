namespace TravelBuddy.Application.Dtos.ApplicationUserDto
{
	public class GetApplicationUserDto
	{
		public GetApplicationUserDto()
		{
			this.Id = new Guid();
		}

		public Guid Id { get; set; }

		public string FirstName { get; set; } = null!;

		public string LastName { get; set; } = null!;

		public string Email { get; set; } = null!;

		public string UserName { get; set; } = null!;

		public string? ProfileImage { get; set; }
	}
}
