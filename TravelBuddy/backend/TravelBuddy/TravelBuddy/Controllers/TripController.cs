namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class TripController : BaseController<AuthenticationController>
	{
		private readonly IAuthService authenticationService;
		private readonly IConfiguration configuration;

		public TripController(IAuthService authenticationService, IConfiguration configuration)
		{
			this.authenticationService = authenticationService;
			this.configuration = configuration;
		}

		[HttpGet]
		[ActionName(nameof(GetString))]
		//[Authorize(Roles = "User")]
		public ActionResult<string> GetString()
		{
			return Ok("Hey");
		}
	}
}
