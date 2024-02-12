using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TravelBuddy.API.Controllers
{
	[ApiController]
	[EnableCors("TravelBuddy")]
	[Route("api/[controller]/[action]")]
	public class ActivityController : BaseController<AuthenticationController>
	{
		private readonly IActivityService activityService;

		public ActivityController(IActivityService tripService, IConfiguration configuration)
		{
			this.activityService = tripService;
		}

		[HttpPost]
		[ModelValidationFilter]
		public async Task<IActionResult> AddActivity(AddActivityDto activityDto)
		{
			await this.activityService.AddActivity(activityDto);
			return Ok();
		}
	}
}
