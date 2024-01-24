namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class AuthenticationController : BaseController<AuthenticationController>
	{
		private readonly IAuthService authenticationService;
		private readonly IConfiguration configuration;

		public AuthenticationController(IAuthService authenticationService, IConfiguration configuration)
		{
			this.authenticationService = authenticationService;
			this.configuration = configuration;
		}

		[HttpPost]
		[ActionName(nameof(Register))]
		[ModelValidationFilter]
		public async Task<ActionResult<GetApplicationUserDto>> Register(CreateApplicationUserDto dto)
		{
			this.authenticationService.CreatePasswordHash(dto.Password, out byte[] passwordHash, out byte[] passwordSalt);
			var result = await this.authenticationService.RegisterUserAsync(dto, passwordHash, passwordSalt);
			return Ok(result);
		}

		[HttpPost]
		[ActionName(nameof(Login))]
		public async Task<ActionResult<string>> Login(LoginDto userDto)
		{
			var getUserDto = await this.authenticationService.LoginUserAsync(userDto);

			var token = this.authenticationService.CreateToken(getUserDto, configuration);
			
			return Ok(token);
		}

		[HttpPost]
		[ActionName(nameof(CreateAdmin))]
		public async Task<IActionResult> CreateAdmin(int userId)
		{
			return null;
		}
	}
}
