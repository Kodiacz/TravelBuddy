namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IAuthService
	{
		public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);

		public Task<GetApplicationUserDto> RegisterUserAsync(CreateApplicationUserDto dto, byte[] passwordHash, byte[] passwordSalt);

		public Task<GetApplicationUserDto> LoginUserAsync(LoginDto dto);

		public JwtToken CreateToken(GetApplicationUserDto user, IConfiguration configuration);
	}
}
