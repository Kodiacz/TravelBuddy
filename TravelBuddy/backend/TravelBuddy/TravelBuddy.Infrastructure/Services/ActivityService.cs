namespace TravelBuddy.Infrastructure.Services
{
	public class ActivityService : BaseService, IActivityService
	{
		public ActivityService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper) { }

		public async Task AddActivity(AddActivityDto activityDto)
		{
			Activity dbActivity = this.Mapper.Map<Activity>(activityDto);
			await this.UnitOfWork.ActivityRepository.AddAsync(dbActivity);
			await this.UnitOfWork.SaveAsync();
		}

		public Task<IEnumerable<GetActivityDto>> GetItineraryActivitiesAsync(int itineraryId)
		{
			throw new NotImplementedException();
		}
	}
}
