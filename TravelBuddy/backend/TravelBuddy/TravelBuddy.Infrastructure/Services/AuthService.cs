using TravelBuddy.API.Exceptions;

namespace TravelBuddy.Infrastructure.Services;

public class AuthService : BaseService, IAuthService
{
	public AuthService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

	public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
	=> Helpers.Encrypt.Password.CreateHash(password, out passwordHash, out passwordSalt);


	public async Task<GetApplicationUserDto> LoginUserAsync(LoginDto dto)
	{
		var applicationUser = await base.UnitOfWork.ApplicationUserRepository.GetByEmailAsReadOnlyAsync(dto.Email);
		if (applicationUser == null) throw new ApplicationArgumenNullException(Messages.Error.INVALID_CREDENTIALS);

		if (!VerifyPasswordHash(applicationUser, dto))
			throw new WrongPasswordException(Messages.Error.INVALID_CREDENTIALS);

		return base.Mapper.Map<GetApplicationUserDto>(applicationUser);
	}

	public async Task<GetApplicationUserDto> RegisterUserAsync(CreateApplicationUserDto dto, byte[] passwordHash, byte[] passwordSalt)
	{
		if (!VerifyPasswordConfirmation(dto.Password, dto.ConfirmPassword))
			throw new NotEqualPasswordsException(Messages.Error.PASSWORDS_NOT_EQUAL);

		ApplicationUser applicationUser = base.Mapper.Map<ApplicationUser>(dto);
		applicationUser.PasswordHash = Convert.ToBase64String(passwordHash);
		applicationUser.PasswordSalt = passwordSalt;

		await base.UnitOfWork.ApplicationUserRepository.AddAsync(applicationUser);
		await base.UnitOfWork.SaveAsync();

		var getUserDto = base.Mapper.Map<GetApplicationUserDto>(applicationUser);
		return getUserDto;
	}

	private bool VerifyPasswordHash(ApplicationUser user, LoginDto dto)
	{
		using (var hmac = new HMACSHA512(user.PasswordSalt!))
		{
			var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(dto.Password));
			return computedHash.SequenceEqual(Convert.FromBase64String(user.PasswordHash));
		}
	}

	private bool VerifyPasswordConfirmation(string password, string confirmedPassword)
	{
		return password.Equals(confirmedPassword);
	}

	public JwtToken CreateToken(GetApplicationUserDto user, IConfiguration configuration)
	{
		JwtToken jwt = new();

		List<Claim> claims = new()
			{
				new Claim(ClaimTypes.NameIdentifier, Convert.ToString(user.Id)!),
				new Claim(ClaimTypes.Name, user.UserName!),
				new Claim(ClaimTypes.Email, user.Email!),
				new Claim(ClaimTypes.GivenName, user.FirstName!),
				new Claim(ClaimTypes.Surname, user.LastName!),
				new Claim(ClaimTypes.Role, "User"),
			};

		var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
			configuration.GetSection("JwtSettings:Secret").Value));

		var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

		var token = new JwtSecurityToken(
			claims: claims,
			expires: DateTime.UtcNow.AddDays(1),
			signingCredentials: cred);

		jwt.AccessToken = new JwtSecurityTokenHandler().WriteToken(token);
		jwt.UserId = user.Id;
		jwt.Email = user.Email;
		jwt.ProfileImage = user.ProfileImage;
		jwt.Role = "User";

		return jwt;
	}
}