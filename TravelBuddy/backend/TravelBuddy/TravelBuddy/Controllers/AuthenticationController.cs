namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("PetCare-FE")]
	[Route("api/[controller]/action")]
	public class AuthenticationController : BaseController<AuthenticationController>
	{
		[HttpPost]
		[ModelValidationFilter]
		[ActionName(nameof(Register))]
		public async Task<ActionResult<ApplicationUser> Register(CreateApplicationUserDto registerRequest)
		{
			ComparePasswords comparePasswordsCommand = new ComparePasswords()
			{
				Password = registerRequest.Password,
				ConfirmPassword = registerRequest.ConfirmPassword,
			};

			bool comparePasswordsResult = await base.Mediator.Send(comparePasswordsCommand);

			if (!comparePasswordsResult) BadRequest();

			CreatePasswordHash createPasswordHashCommand = new() { Password = registerRequest.Password };
			ComputedPassword computedPassowrd = await base.Mediator.Send(createPasswordHashCommand);
			CreateApplicationUser createApplicationUserCommand = base.Mapper.Map<CreateApplicationUser>(registerRequest);
			createApplicationUserCommand.PasswordHash = computedPassowrd.PasswordHash;
			createApplicationUserCommand.PasswordSalt = computedPassowrd.PasswordSalt;
			ApplicationUser owner = await base.Mediator.Send(createApplicationUserCommand);
			GetApplicationUserDto getApplicationUserDto = base.Mapper.Map<GetApplicationUserDto>(owner);
			return NoContent();
		}

		[HttpPost]
		[ActionName(nameof(Login))]
		public async Task<ActionResult<string>> Login(UserLoginDto loginRequest)
		{
			GetApplicationUserByUsername getApplicationUserCommand = new() { Username = loginRequest.Username };
			ApplicationUser owner = await base.Mediator.Send(getApplicationUserCommand);
			VerifyPasswordHash verifyPasswordCommand = new()
			{
				Password = loginRequest.Password,
				PasswordHash = owner.PasswordHash!,
				PasswordSalt = owner.PasswordSalt!,
			};

			bool verification = await base.Mediator.Send(verifyPasswordCommand);

			if (!verification)
			{
				return BadRequest("Wrong password");
			}

			GenerateToken generateTokenCommand = new()
			{
				ApplicationUser = owner,
				Role = "User",
			};

			JwtToken ownerToken = await this.Mediator.Send(generateTokenCommand);
			ownerToken.Username = owner.Username!;
			ownerToken.UserId = owner.Id;
			ownerToken.ProfileImageFilePath = owner.ProfileImageFilePath;

			return Ok(ownerToken);
		}

		[HttpPost]
		[ActionName(nameof(CreateAdmin))]
		public async Task<IActionResult> CreateAdmin(int userId)
		{
			return null;
		}
	}
}
