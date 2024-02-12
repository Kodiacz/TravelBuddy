namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class ItineraryController : BaseController<AuthenticationController>
	{
		private readonly IItineraryService itineraryService;

		public ItineraryController(IItineraryService tripService, IConfiguration configuration)
		{
			this.itineraryService = tripService;
		}

		[HttpGet]
		[ActionName(nameof(GetTripItineraries))]
		//[Authorize(Roles = "User")]
		public async Task<ActionResult> GetTripItineraries(int tripId)
		{
			var trips = await this.itineraryService.GetTripItineraries(tripId);
			return Ok(trips);
		}

		[HttpPost]
		[ModelValidationFilter]
		public async Task<IActionResult> AddItinerary(AddItineraryDto itineraryDto)
		{
			await this.itineraryService.AddItinerary(itineraryDto);
			return Ok();
		}
	}
}
