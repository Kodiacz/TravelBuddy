using TravelBuddy.Application.Models;

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
		[ActionName(nameof(AddActivity))]
		public async Task<IActionResult> AddActivity(AddActivityDto activityDto)
		{
			await this.activityService.AddActivity(activityDto);
			return Ok();
		}

		[HttpPatch("{activityId}")]
		[ActionName(nameof(PatchUpdateActivity))]
		public async Task<IActionResult> PatchUpdateActivity([FromBody] JsonPatchDocument activityDocument, [FromRoute] int activityId)
		{
			await this.activityService.PatchUpdate(activityDocument, activityId);

			return Ok();
		}

		[HttpPatch]
		[ActionName(nameof(BulkyPatchUpdateActivity))]
		public async Task<IActionResult> BulkyPatchUpdateActivity([FromBody] List<CustomPatchOperation> activityDocuments)
		{
			await this.activityService.BulkyPatchUpdate(activityDocuments);

			return Ok();
		}
	}
}
