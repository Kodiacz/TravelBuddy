namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IAuthService
	{
		public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);

		public Task RegisterUser(CreateApplicationUserDto dto);
	}
}
