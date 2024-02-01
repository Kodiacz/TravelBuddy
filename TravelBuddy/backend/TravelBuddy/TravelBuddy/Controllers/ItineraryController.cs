namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class ItineraryController : BaseController<AuthenticationController>
	{
		private readonly IItineraryService tripService;

		public ItineraryController(IItineraryService tripService, IConfiguration configuration)
		{
			this.tripService = tripService;
		}

		[HttpGet]
		[ActionName(nameof(GetTripItineraries))]
		//[Authorize(Roles = "User")]
		public async Task<ActionResult> GetTripItineraries(int tripId)
		{
			var trips = await this.tripService.GetTripItineraries(tripId);
			return Ok(trips);
		}
	}
}
