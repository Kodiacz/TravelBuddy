namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class TripController : BaseController<AuthenticationController>
	{
		private readonly ITripService tripService;

		public TripController(ITripService tripService, IConfiguration configuration)
		{
			this.tripService = tripService;
		}

		[HttpGet]
		[ActionName(nameof(GetUserTrip))]
		//[Authorize(Roles = "User")]
		public async Task<ActionResult> GetUserTrip(Guid userId)
		{
			var trips = await this.tripService.GetUserTrips(userId);
			return Ok(trips);
		}
	}
}
