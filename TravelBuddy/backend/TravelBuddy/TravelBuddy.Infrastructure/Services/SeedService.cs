namespace TravelBuddy.Infrastructure.Services
{
	public class SeedService : BaseService, ISeedService
	{
		private const string usersJsonPath = @"C:\dev\Personal-Folder\travel-buddy";


		public SeedService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		//MTODO: maybe its not needed to be async
		public async Task SeedData()
		{
			await SeedUsers();
		}

		private async Task SeedUsers()
		{
			var users = Seeding.Users;
			try
			{

				await base.UnitOfWork.ApplicationUserRepository.AddRangeAsync(users);
				await base.UnitOfWork.SaveAsync();
			}
			catch (Exception ex)
			{
				var message = ex.Message;
			}
		}

		private Task SeedTrips()
		{
			return Task.CompletedTask;
		}

		private Task SeedItineraries()
		{
			return Task.CompletedTask;
		}

		private Task SeedActivities()
		{
			return (Task)Task.CompletedTask;
		}
	}

	internal static class UserSeed
	{
		//internal List<ApplicationUser> Users => new()
		//{

		//};
	}
}
