using TravelBuddy.Application.Dtos.ApplicationUserDto;

namespace TravelBuddy.Infrastructure.Services
{
	public class AuthService : IAuthService
	{
		private readonly IUnitOfWork unitOfWork;
		private readonly IMapper mapper;

		public AuthService(IUnitOfWork unitOfWork, IMapper mapper)
		{
			this.unitOfWork = unitOfWork;
			this.mapper = mapper;
		}

		public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
		{
			using (var hmac = new HMACSHA512())
			{
				passwordSalt = hmac.Key;
				passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
			}
		}

		public async Task RegisterUser(CreateApplicationUserDto dto) 
		{
			ApplicationUser user = mapper.Map<ApplicationUser>(dto);
			await unitOfWork.ApplicationUserRepository.AddAsync(user);
		}
	}
}
