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

		public async Task PatchUpdate(JsonPatchDocument activityDocument, int activityId)
		{
			var dbActivity = await this.UnitOfWork.ActivityRepository.GetByIdAsync(activityId);

			if (dbActivity != null)
			{
				activityDocument.ApplyTo(dbActivity);
			}

			await this.UnitOfWork.ActivityRepository.SaveAsync();
		}

		public async Task BulkyPatchUpdate(List<CustomPatchOperation> activityPatchOperations)
		{
			foreach (var activityPatchOperation in activityPatchOperations)
			{
				var patchDocument = new JsonPatchDocument();

				patchDocument.Replace(activityPatchOperation.Path, activityPatchOperation.Value);

				var activityId = int.Parse(activityPatchOperation.EntityId);

				var dbActivity = await this.UnitOfWork.ActivityRepository.GetByIdAsync(activityId);

				if (dbActivity != null)
				{
					patchDocument.ApplyTo(dbActivity);
				}
			}

			await this.UnitOfWork.ActivityRepository.SaveAsync();
		}
	}
}
