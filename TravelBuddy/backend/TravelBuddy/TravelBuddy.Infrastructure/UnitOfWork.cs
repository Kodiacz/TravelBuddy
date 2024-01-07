namespace TravelBuddy.Infrastructure
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly TravelBuddyDbContext dbContext;

		public UnitOfWork() { }

		public UnitOfWork(
			TravelBuddyDbContext dbContext,
			IActivityRepository activityRepository,
			IItineraryRepository itineraryRepository,
			ITripRepository tripRepository,
			IApplicationUserRepository applicationUserRepository)
		{
			this.dbContext = dbContext;
			this.ActivityRepository = activityRepository;
			this.ItineraryRepository = itineraryRepository;
			this.TripRepository = tripRepository;
			this.ApplicationUserRepository = applicationUserRepository;
		}

		public IActivityRepository ActivityRepository { get; }

		public IApplicationUserRepository ApplicationUserRepository { get; }

		public IItineraryRepository ItineraryRepository { get; }

		public ITripRepository TripRepository { get; }

		public void Dispose()
		{
			dbContext.Dispose();
		}
	}
}
