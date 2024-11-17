using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelBuddy.Infrastructure.Services;

namespace TravelBuddy.API.Controllers
{
	[ApiController]
	//[Authorize(Roles = "Admin")]
	[Route("api/[controller]/[action]")]
	public class SeedController : BaseController<SeedController>
	{
		private readonly ISeedService seedService;

		public SeedController(ISeedService seedService)
		{
			this.seedService = seedService;
		}

		[HttpPost]
		[ActionName(nameof(SeedData))]
		public async Task<ActionResult<string>> SeedData()
		{
			await seedService.SeedData();
			return Ok();
		}
	}
}
