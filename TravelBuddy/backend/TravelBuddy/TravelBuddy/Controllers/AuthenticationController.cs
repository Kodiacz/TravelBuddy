namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy-FE")]
	[Route("api/[controller]/[action]")]
	public class AuthenticationController : BaseController<AuthenticationController>
	{
		private readonly IAuthService authenticationService;

		public AuthenticationController(IAuthService authenticationService)
		{
			this.authenticationService = authenticationService;
		}

		[HttpPost]
		[ActionName(nameof(Register))]
		public async Task<ActionResult<GetApplicationUserDto>> Register(CreateApplicationUserDto dto)
		{
			this.authenticationService.CreatePasswordHash(dto.Password, out byte[] passwordHash, out byte[] passwordSalt);
			var result = await this.authenticationService.RegisterUser(dto, passwordHash, passwordSalt);
			return Ok(result);
		}

		[HttpPost]
		[ActionName(nameof(Login))]
		public async Task<ActionResult<string>> Login()
		{
			return Ok();
		}

		[HttpPost]
		[ActionName(nameof(CreateAdmin))]
		public async Task<IActionResult> CreateAdmin(int userId)
		{
			return null;
		}
	}
}
