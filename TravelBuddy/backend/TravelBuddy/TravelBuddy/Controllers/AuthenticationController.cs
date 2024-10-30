namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class AuthenticationController : BaseController<AuthenticationController>
	{
		private readonly IAuthService authenticationService;
		private readonly IConfiguration configuration;
		private readonly IBlobStorageService blobStorageService;

		public AuthenticationController(IAuthService authenticationService, IConfiguration configuration, IBlobStorageService blobStorageService)
		{
			this.authenticationService = authenticationService;
			this.configuration = configuration;
			this.blobStorageService = blobStorageService;
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

		[HttpPost]
		[ActionName(nameof(UploadImage))]
		public async Task<ActionResult<string>> UploadImage(IFormFile file)
		{
			if (file.Length > 0)
			{
				using var stream = file.OpenReadStream();
				var fileUri = await blobStorageService.UploadAsync(file.FileName, stream);
				return Ok(new { Uri = fileUri });
			}
			return BadRequest("Invalid file");
		}
	}
}
